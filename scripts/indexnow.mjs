// Envía URLs a IndexNow (Bing, Yandex, Seznam, Naver). Google no participa.
//
//   npm run indexnow          → envía solo lo que cambió desde la última corrida
//   npm run indexnow:dry      → muestra qué enviaría, sin enviar ni tocar el estado
//   npm run indexnow -- --all → fuerza el envío de todas las URLs del sitemap
//   npm run indexnow -- --url=https://www.amtecnologia.cl/blog/mi-post
//
// El "cambió" se calcula con un hash del texto visible de cada página, no del HTML
// crudo: así un deploy que solo renombra los chunks de JS no dispara envíos falsos.
// IndexNow castiga el ruido, así que conviene avisar solo cuando hay cambio real.

import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "www.amtecnologia.cl";
const BASE = `https://${HOST}`;
const KEY = "82424b2fb0c74422a2a876c5e1a250ec";
const KEY_LOCATION = `${BASE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

const STATE_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "indexnow-state.json",
);

// Rutas que nunca deben enviarse (la landing de Ads es noindex).
const EXCLUDE = [/^\/lp\//];

const CONCURRENCY = 6;

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const value = (name) =>
  args.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);

const dryRun = flag("dry");
const forceAll = flag("all");
const singleUrl = value("url");

function excluded(url) {
  const { pathname } = new URL(url);
  return EXCLUDE.some((re) => re.test(pathname));
}

async function fetchSitemapUrls() {
  const res = await fetch(`${BASE}/sitemap.xml`, {
    headers: { "user-agent": "am-tecnologia-indexnow" },
  });
  if (!res.ok) {
    throw new Error(`sitemap.xml devolvió ${res.status}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    throw new Error("no se encontraron <loc> en el sitemap");
  }
  return [...new Set(urls)].filter((u) => !excluded(u));
}

// Hash del contenido legible: fuera scripts, estilos, comentarios y etiquetas.
function contentHash(html) {
  const text = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return createHash("sha256").update(text).digest("hex");
}

async function hashUrl(url) {
  try {
    const res = await fetch(url, {
      headers: { "user-agent": "am-tecnologia-indexnow" },
      redirect: "follow",
    });
    if (!res.ok) return { url, error: `HTTP ${res.status}` };
    return { url, hash: contentHash(await res.text()) };
  } catch (err) {
    return { url, error: err.message };
  }
}

async function mapLimit(items, limit, fn) {
  const results = [];
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const i = cursor++;
      results[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return results;
}

async function loadState() {
  try {
    return JSON.parse(await readFile(STATE_PATH, "utf8"));
  } catch {
    return { hashes: {} };
  }
}

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });
  const reasons = {
    400: "formato inválido",
    403: `clave rechazada — revisá que ${KEY_LOCATION} exista y contenga la clave`,
    422: "las URLs no pertenecen al host, o la clave no coincide",
    429: "demasiadas solicitudes, esperá antes de reintentar",
  };
  if (!res.ok) {
    throw new Error(`IndexNow ${res.status}: ${reasons[res.status] ?? await res.text()}`);
  }
  return res.status;
}

async function main() {
  // Envío puntual de una URL: sin estado, sin hashes.
  if (singleUrl) {
    if (!singleUrl.startsWith(BASE)) {
      throw new Error(`la URL debe pertenecer a ${BASE}`);
    }
    if (excluded(singleUrl)) {
      throw new Error(`${singleUrl} está en la lista de exclusión (noindex)`);
    }
    if (dryRun) {
      console.log(`[dry] enviaría ${singleUrl}`);
      return;
    }
    await submit([singleUrl]);
    console.log(`Enviada: ${singleUrl}`);
    return;
  }

  const urls = await fetchSitemapUrls();
  console.log(`Sitemap: ${urls.length} URLs (excluidas las noindex)`);

  const state = await loadState();
  const results = await mapLimit(urls, CONCURRENCY, hashUrl);

  const failed = results.filter((r) => r.error);
  for (const { url, error } of failed) {
    console.warn(`  ! ${url} — ${error} (se omite)`);
  }

  const ok = results.filter((r) => r.hash);
  const changed = forceAll
    ? ok
    : ok.filter((r) => state.hashes[r.url] !== r.hash);

  if (changed.length === 0) {
    console.log("Sin cambios de contenido. Nada que enviar.");
    return;
  }

  for (const { url } of changed) {
    const label = state.hashes[url] ? "modificada" : "nueva";
    console.log(`  → ${url} (${label})`);
  }

  if (dryRun) {
    console.log(`[dry] enviaría ${changed.length} URLs. Estado sin tocar.`);
    return;
  }

  const status = await submit(changed.map((r) => r.url));
  console.log(`IndexNow ${status}: ${changed.length} URLs enviadas.`);

  // El estado guarda TODAS las páginas leídas, no solo las enviadas, para que la
  // próxima corrida no las vea como nuevas.
  const hashes = { ...state.hashes };
  for (const { url, hash } of ok) hashes[url] = hash;
  // Olvida las URLs que ya no están en el sitemap.
  const live = new Set(urls);
  for (const url of Object.keys(hashes)) {
    if (!live.has(url)) delete hashes[url];
  }

  await writeFile(
    STATE_PATH,
    `${JSON.stringify({ updatedAt: new Date().toISOString(), hashes }, null, 2)}\n`,
  );
}

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});

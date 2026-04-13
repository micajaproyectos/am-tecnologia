import fs from "fs";
const p = new URL("../components/Hero.tsx", import.meta.url);
let s = fs.readFileSync(p, "utf8");
const marker = "\n          {/* Social proof */}";
const start = s.indexOf(marker);
if (start === -1) {
  console.error("start not found");
  process.exit(1);
}
const end = s.indexOf("\n          {/* Actions */}", start);
if (end === -1) {
  console.error("end not found");
  process.exit(1);
}
s = s.slice(0, start) + s.slice(end);
fs.writeFileSync(p, s);
console.log("removed");

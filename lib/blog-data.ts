export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  date: string;
  readingTime: number;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  faqSchema?: { q: string; a: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cuanto-cuesta-una-pagina-web-en-chile",
    title: "¿Cuánto Cuesta una Página Web en Chile en 2026? Precios Reales",
    metaTitle:
      "¿Cuánto Cuesta una Página Web en Chile? Precios 2026 | AM Tecnología",
    metaDescription:
      "Conoce los precios reales de una página web en Chile en 2026. Comparamos costos de landing pages, sitios corporativos y tiendas online. Desde $99.990.",
    canonicalUrl:
      "https://www.amtecnologia.cl/blog/cuanto-cuesta-una-pagina-web-en-chile",
    date: "2026-05-07",
    readingTime: 8,
    author: "AM Tecnología",
    category: "Precios y Costos",
    tags: ["precios", "página web", "Chile", "costos", "pymes"],
    excerpt:
      "El mercado va desde los $99.990 hasta los $7.000.000 o más. Pero lo que realmente importa no es el precio — es qué incluye. Aquí tienes los rangos reales del mercado chileno en 2026 y cómo no caer en trampas.",
    content: `## ¿Cuánto cuesta realmente una página web en Chile?

Es la pregunta que miles de dueños de pymes buscan en Google cada mes. Y con razón: los precios varían enormemente — desde los $99.990 hasta los $7.000.000 o más — y la diferencia entre un proveedor y otro no siempre es obvia a primera vista.

En este artículo te damos los rangos reales del mercado chileno en 2026, sin relleno. Y te explicamos qué debería incluir cada precio. Porque lo más importante no es cuánto cuesta, sino qué obtienes por ese precio.

## Precios del mercado chileno en 2026

Estos rangos reflejan lo que realmente cobran agencias y freelancers en Chile hoy. No son cifras inventadas — son el resultado de revisar decenas de presupuestos reales del mercado.

### Landing page de ventas

Entre **$99.990 y $350.000**. Es el tipo más solicitado: una sola página diseñada para convertir visitantes en clientes. Ideal para negocios de servicios, profesionales independientes y pymes que quieren presencia digital sin complicarse.

En la parte baja del rango encuentras propuestas de freelancers o plantillas genéricas. En la parte alta, propuestas de agencias que incluyen redacción de textos, configuración de Google Analytics y algún nivel de optimización para buscadores.

### Sitio corporativo para pymes

Entre **$350.000 y $550.000**. Incluye varias páginas (inicio, servicios, quiénes somos, contacto), diseño personalizado y generalmente integración con Google Maps. Es lo que la mayoría de las empresas medianas termina contratando.

### Tienda online con Webpay o MercadoPago

Entre **$650.000 y $1.200.000**. Una tienda online real — con catálogo de productos, carrito de compras y pasarela de pago integrada — tiene más complejidad técnica. En Chile, la integración con Webpay Plus puede encarecer el desarrollo, pero es necesaria para la mayoría de los comercios.

### Desarrollo a medida o plataformas SaaS

Desde **$1.800.000 en adelante**. Proyectos con lógica de negocio compleja, integraciones con sistemas externos, paneles de administración personalizados o aplicaciones web. El rango no tiene techo.

## Qué incluye (y qué no) una página web profesional

### Lo mínimo que debería incluir cualquier sitio

Independiente del precio, un sitio web profesional debe entregarte:

**Diseño responsive**: que se vea bien en celular, tablet y computador. En Chile, más del 65% del tráfico web viene desde dispositivos móviles.

**Certificado SSL (HTTPS)**: el candado de seguridad en la barra del navegador. Sin él, Google penaliza tu posicionamiento y los usuarios reciben advertencias de "sitio no seguro".

**SEO técnico básico**: títulos optimizados, etiquetas meta, velocidad de carga aceptable y estructura correcta. Sin esto, Google no puede indexar bien tu sitio.

**Google Analytics**: para que puedas ver cuántas personas visitan tu sitio, desde dónde llegan y qué páginas ven.

### Lo que muchos proveedores NO incluyen (y deberías exigir)

Aquí está el problema real. Muchos entregan una web "bonita" pero sin configurar los elementos que hacen que Google la encuentre y posicione.

**Google Search Console**: la herramienta oficial de Google para monitorear cómo indexa tu sitio. Sin esto, no sabes si Google está rastreando tus páginas o si hay errores que te están afectando.

**Perfil de Google Maps (Google Business)**: fundamental para negocios locales. Si tienes una empresa en Santiago, Concepción o Puerto Montt y no apareces en Google Maps, pierdes una cantidad enorme de clientes potenciales cada mes.

**Posicionamiento orgánico real**: la diferencia entre "tener una web" y [aparecer en Google](/aparecer-en-google) es enorme. El primero es una presencia digital pasiva. El segundo es una estrategia que atrae clientes sin pagar por cada clic. Son cosas distintas, y muchos proveedores te cobran solo la primera.

## Freelancer vs agencia: ¿qué conviene?

### Freelancer independiente

**Rango de precio**: $150.000 a $500.000.

**Ventajas**: trato directo, precios más bajos, flexibilidad. Muchos freelancers jóvenes hacen muy buen trabajo técnico.

**Riesgos**: sin soporte garantizado después de la entrega, disponibilidad limitada ante problemas urgentes, y en algunos casos los proyectos quedan sin terminar cuando el freelancer cambia de trabajo.

### Agencia grande

**Rango de precio**: $1.000.000 en adelante.

**Ventajas**: estructura, equipo completo, procesos definidos.

**Riesgos**: tiempos más lentos, costos altos, y a veces más foco en el proceso interno que en el resultado del cliente. Muchas cobran mensualidades elevadas por "mantenimiento" aunque no realicen trabajo visible.

### Agencia especializada en resultado

**Rango de precio**: $99.990 a $500.000.

El modelo que seguimos en AM Tecnología. No vendemos horas de diseño ni plantillas — entregamos una herramienta de captación de clientes. Cada [landing page](/servicios/landing-page) se construye con la estructura técnica que Google requiere, configuración de analytics y velocidad optimizada. El precio es competitivo porque nuestro proceso está diseñado para entregar en 48 horas sin sacrificar calidad.

## Los costos ocultos que nadie te cuenta

Antes de firmar, considera estos costos adicionales que a veces no aparecen en el presupuesto inicial:

**Dominio .cl**: aproximadamente $10.000 a $15.000 al año. Ojo crítico aquí: el dominio **debe quedar registrado a tu nombre**, no al del proveedor. Si queda a nombre del diseñador y hay algún problema, podrías perder tu dominio y todo lo que construiste.

**Hosting (alojamiento web)**: entre $30.000 y $120.000 anuales según el proveedor y el plan. Algunos incluyen el primer año y luego cobran renovación.

**Mantenimiento**: entre $50.000 y $200.000 al mes si contratas soporte continuo. No es obligatorio si el sitio está bien construido, pero conviene tenerlo disponible para cambios de contenido o actualizaciones.

**Rediseño en 2-3 años**: si el sitio fue construido con tecnología obsoleta o una plantilla genérica, probablemente necesites rehacerlo antes de lo esperado. Un sitio construido sobre tecnología moderna tiene una vida útil mucho mayor.

**El costo invisible**: cada mes sin presencia en Google es un mes que tus competidores capturan esos clientes. Si tu rubro tiene 500 búsquedas mensuales en tu ciudad y tú no apareces, esos contactos van a otro lado — todos los meses.

## ¿Por qué nuestro servicio parte desde $99.990?

Es la pregunta que más nos hacen. La respuesta es directa: no vendemos diseño web — vendemos la herramienta completa para que tu negocio aparezca en Google.

Nuestro proceso está optimizado para entregar en 48 horas sin reuniones innecesarias. Usamos tecnología moderna que carga rápido y que Google puede leer correctamente. Y configuramos desde el día uno todo lo que hace que un sitio sea efectivo.

Lo que incluye cada sitio que entregamos:

**Posicionamiento en Google configurado desde el inicio**: estructura técnica correcta, títulos optimizados para las búsquedas de tu negocio y velocidad en el percentil 90 de PageSpeed Insights.

**Sin mensualidades obligatorias**: pagas una vez y el sitio es tuyo. No cobramos por actualizaciones básicas ni por "mantenerlo en línea" — eso ya está incluido.

**Dominio y hosting a tu nombre**: todo queda registrado a tu nombre, siempre. Sin excepciones.

Si necesitas una [tienda online con Webpay](/servicios/ecommerce), el precio sube por la complejidad técnica — pero sigue siendo el más competitivo del mercado para lo que incluye.

## Cómo elegir al proveedor correcto

### 5 preguntas que debes hacer antes de contratar

**1. ¿El dominio queda registrado a mi nombre?** Si la respuesta es no o es ambigua, no contrates.

**2. ¿Puedo acceder al panel de administración del sitio?** Debes poder actualizar contenido y ver estadísticas sin depender del proveedor para cada cambio.

**3. ¿Incluye configuración de Google Search Console y Analytics?** Si no saben de qué estás hablando, busca otro proveedor.

**4. ¿Qué pasa si necesito un cambio después de la entrega?** Aclara si hay costo por ajustes menores o si hay un período de soporte incluido.

**5. ¿Pueden mostrarme ejemplos de sitios que hayan posicionado en Google?** Cualquier agencia seria puede mostrarte resultados concretos, no solo capturas de pantalla de diseño.

### Señales de alerta que no debes ignorar

No seguir contratando si el proveedor: no entrega los accesos al sitio (solo ellos tienen el control), cobra mensualidades por "mantener el sitio en línea" cuando eso es simplemente el hosting que ya estás pagando, no incluye ni menciona SEO, el contrato no especifica tiempos de entrega claros, o usan la misma plantilla genérica para todos sus clientes sin adaptarla a tu negocio o ciudad.

## Preguntas frecuentes

### ¿Cuánto cuesta una landing page en Chile?

Una landing page en Chile en 2026 va desde los $99.990 hasta los $350.000. La diferencia está en qué incluye: asegúrate de que venga con SEO configurado, Google Analytics y el dominio a tu nombre. El precio más bajo no siempre es el peor — depende de si incluye posicionamiento o no.

### ¿El precio incluye posicionamiento en Google?

Depende completamente del proveedor. Muchos cobran el diseño y el posicionamiento por separado — y el posicionamiento puede costar tanto o más que el sitio mismo. En AM Tecnología, cada sitio se construye con la estructura técnica que Google requiere. No es un servicio adicional: es parte del producto base.

### ¿Hay costos mensuales obligatorios?

No debería haberlos más allá del hosting y el dominio, que suman entre $40.000 y $130.000 anuales. Si un proveedor cobra mensualidades por "mantenimiento básico" sin entregarte nada concreto a cambio, es una señal de alerta importante.

### ¿Cuánto tarda en estar lista una página web?

En AM Tecnología entregamos en 48 horas desde que apruebas la cotización. Agencias más grandes pueden tardar entre 4 y 12 semanas. Los tiempos largos no siempre significan mejor resultado — a veces significan procesos internos más lentos.

### ¿Puedo pagar en cuotas?

Depende del proveedor. En nuestro caso, aceptamos pago en cuotas con tarjeta de crédito a través de tu banco, sin interés de nuestra parte. Consúltalo al momento de cotizar.`,
    faqSchema: [
      {
        q: "¿Cuánto cuesta una landing page en Chile?",
        a: "Una landing page en Chile en 2026 va desde los $99.990 hasta los $350.000. La diferencia está en qué incluye: asegúrate de que venga con SEO configurado, Google Analytics y el dominio a tu nombre.",
      },
      {
        q: "¿El precio de una página web incluye posicionamiento en Google?",
        a: "Depende del proveedor. Muchos cobran el diseño y el posicionamiento por separado. En AM Tecnología, cada sitio se construye con la estructura técnica que Google requiere — el posicionamiento es parte del producto, no un extra.",
      },
      {
        q: "¿Hay costos mensuales obligatorios al contratar una página web?",
        a: "No debería haberlos más allá del hosting y el dominio, que suman entre $40.000 y $130.000 anuales en total. Si un proveedor cobra mensualidades por 'mantenimiento básico' sin entregarte algo concreto, es una señal de alerta.",
      },
      {
        q: "¿Cuánto tarda en estar lista una página web en Chile?",
        a: "Depende del proveedor. En AM Tecnología entregamos en 48 horas desde que apruebas la cotización. Agencias más grandes pueden tardar entre 4 y 12 semanas.",
      },
      {
        q: "¿Puedo pagar una página web en cuotas en Chile?",
        a: "Depende del proveedor. En AM Tecnología aceptamos pago en cuotas con tarjeta de crédito a través de tu banco, sin interés de nuestra parte. Consúltalo al momento de cotizar.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(current: BlogPost, limit = 3): BlogPost[] {
  return BLOG_POSTS.filter(
    (p) =>
      p.slug !== current.slug &&
      (p.category === current.category ||
        p.tags.some((t) => current.tags.includes(t)))
  ).slice(0, limit);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

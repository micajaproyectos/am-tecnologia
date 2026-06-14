export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  seoTitle: string;
  whatIsTitle: string;
  badge: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  whatIs: string;
  idealFor: string[];
  features: ServiceFeature[];
  process: { step: string; title: string; desc: string }[];
  price: string;
  priceNote: string;
  faqs: ServiceFaq[];
  schemaDescription: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "landing-page",
    title: "Landing Page de Ventas",
    metaTitle: "Landing Page Chile | Páginas que Convierten",
    metaDescription:
      "Creamos landing pages que convierten visitas en clientes desde Google. Posicionamiento orgánico incluido. Desde $149.990 pago único en Chile.",
    seoTitle: "Landing Page de Ventas Chile",
    whatIsTitle: "Cómo funciona una Landing Page de Ventas en Chile",
    badge: "Más contratado",
    headline: "Una página que vende",
    headlineAccent: "las 24 horas.",
    intro:
      "Una landing page de ventas no es solo una página web bonita. Es una herramienta comercial diseñada para que cada visita de Google se convierta en un contacto real para tu negocio.",
    whatIs:
      "Una landing page de ventas es una página web de una sola sección diseñada con un único objetivo: convertir al visitante en un cliente potencial. A diferencia de un sitio web tradicional que presenta todo tu negocio, la landing page se enfoca en una oferta específica, elimina las distracciones y guía al visitante directamente hacia la acción: llamarte, escribirte por WhatsApp o completar un formulario. En AM Tecnología diseñamos landing pages optimizadas para posicionamiento en Google Chile, de modo que no solo se ven bien, sino que además te encuentran los clientes correctos en el momento correcto.",
    idealFor: [
      "Emprendedores lanzando un producto o servicio nuevo",
      "Negocios que quieren captar leads desde Google Ads o SEO",
      "Pymes que necesitan una presencia digital rápida y efectiva",
      "Profesionales independientes: médicos, abogados, consultores",
      "Tiendas físicas que quieren recibir contactos desde internet",
    ],
    features: [
      {
        title: "Diseño orientado a conversión",
        desc: "Estructura visual y de contenido pensada para que el visitante tome acción: CTA claro, propuesta de valor al tope, prueba social visible.",
      },
      {
        title: "Posicionamiento en Google incluido",
        desc: "Optimización SEO completa: metadata, schema markup, velocidad, heading structure y palabras clave relevantes para tu rubro y ciudad.",
      },
      {
        title: "Integración con WhatsApp",
        desc: "Botón flotante de WhatsApp con mensaje prellenado según el servicio, para que el cliente llegue ya listo para cerrar.",
      },
      {
        title: "Google Analytics y Search Console",
        desc: "Configuramos el tracking desde el día uno para que puedas ver cuántas visitas llegan, desde dónde y cuántas se convierten.",
      },
      {
        title: "Velocidad y mobile-first",
        desc: "Carga en menos de 2 segundos en móvil. Google prioriza la velocidad para el posicionamiento; tus clientes también.",
      },
      {
        title: "Posicionado desde el primer día",
        desc: "Desde que apruebas la cotización, iniciamos de inmediato. Tu sitio publicado, optimizado y listo para captar clientes en Google.",
      },
    ],
    process: [
      { step: "01", title: "Brief por WhatsApp", desc: "Nos cuentas tu negocio, tu oferta y tu cliente ideal. En menos de 1 hora tienes una cotización." },
      { step: "02", title: "Diseño y contenido", desc: "Creamos la estructura, redactamos el texto orientado a conversión y optimizamos cada sección para Google." },
      { step: "03", title: "Revisión y ajustes", desc: "Te mostramos el diseño. Tienes una ronda de ajustes incluida para que todo quede exactamente como lo necesitas." },
      { step: "04", title: "Publicación y entrega", desc: "Subimos el sitio, configuramos Analytics, Search Console y te entregamos accesos completos." },
    ],
    price: "$149.990",
    priceNote: "Pago único · Sin mensualidades · Dominio y hosting incluidos el primer año",
    faqs: [
      {
        q: "¿Una landing page puede posicionarse en Google?",
        a: "Sí. Una landing page bien optimizada puede posicionarse para búsquedas específicas de tu rubro y ciudad. El truco está en la estructura, el contenido y la velocidad de carga, que son exactamente lo que optimizamos.",
      },
      {
        q: "¿Qué diferencia hay entre una landing page y un sitio web completo?",
        a: "Un sitio web tiene múltiples páginas y secciones. Una landing page tiene una sola página enfocada en una oferta concreta. Para captar clientes rápido y posicionarte en una keyword específica, la landing page es la opción más efectiva.",
      },
      {
        q: "¿Puedo agregar más páginas después?",
        a: "Sí. Muchos clientes parten con una landing page y luego escalan a un sitio más completo. Construimos sobre la misma base sin necesidad de empezar desde cero.",
      },
      {
        q: "¿Qué necesito entregarles para empezar?",
        a: "Solo necesitamos información básica de tu negocio: qué ofreces, a quién va dirigido y cómo pueden contactarte. Del contenido, el diseño y la optimización nos encargamos nosotros.",
      },
    ],
    schemaDescription:
      "Landing page profesional optimizada para posicionamiento en Google Chile. Diseño orientado a conversión y resultados medibles.",
  },
  {
    slug: "presencia-redes-sociales",
    title: "Presencia en Redes Sociales",
    metaTitle: "Gestión de Redes Sociales Chile",
    metaDescription:
      "Administramos tus redes sociales con branding unificado y contenido profesional. Instagram, Facebook, TikTok y Google Business. Para pymes en Chile.",
    seoTitle: "Gestión de Redes Sociales Chile",
    whatIsTitle: "Qué incluye la gestión de redes sociales para pymes",
    badge: "Gestión continua",
    headline: "Tu marca activa",
    headlineAccent: "en todas las redes.",
    intro:
      "Administramos tus redes sociales mes a mes para que tu negocio tenga presencia profesional y coherente en Instagram, Facebook, TikTok y Google Business Profile, sin que tengas que preocuparte por el contenido.",
    whatIs:
      "La gestión de redes sociales es un servicio mensual donde nos encargamos de crear y publicar contenido, mantener la imagen de marca unificada en todos los perfiles y hacer seguimiento de los resultados. No solo publicamos por publicar: cada pieza de contenido responde a la identidad de tu negocio y está pensada para que tu audiencia te reconozca, confíe en ti y eventualmente te contacte. En AM Tecnología conectamos todos tus perfiles sociales bajo una misma línea visual y de comunicación, para que Instagram, Facebook, TikTok y Google Business Profile cuenten la misma historia de forma coherente.",
    idealFor: [
      "Negocios que quieren aparecer profesionalmente en redes pero no tienen tiempo para gestionarlas",
      "Pymes que publican de forma irregular y sin una línea de marca definida",
      "Emprendedores que dependen del boca a boca y quieren escalar su visibilidad",
      "Empresas que acaban de abrir y necesitan construir presencia digital desde cero",
      "Negocios locales que quieren mantenerse activos en la mente de sus clientes",
    ],
    features: [
      {
        title: "Gestión mensual de Instagram, Facebook y TikTok",
        desc: "Planificamos, creamos y publicamos contenido de forma consistente en tus perfiles, manteniendo el ritmo y la frecuencia que el algoritmo necesita para favorecerte.",
      },
      {
        title: "Google Business Profile activo",
        desc: "Mantenemos tu ficha de Google actualizada con publicaciones, fotos y respuesta a reseñas para mejorar tu visibilidad en búsquedas locales.",
      },
      {
        title: "Branding unificado en todos los perfiles",
        desc: "Foto de perfil, portada, bio y paleta de colores coherentes en todas las plataformas. Tu marca se ve profesional y reconocible en cualquier canal.",
      },
      {
        title: "Creación de contenido con identidad de marca",
        desc: "Diseño de piezas visuales y redacción de textos adaptados a tu tono de comunicación y a lo que le importa a tu audiencia.",
      },
      {
        title: "Reporte mensual de resultados",
        desc: "Informe con las métricas clave de cada plataforma: alcance, interacciones, crecimiento de seguidores y contenido con mejor rendimiento.",
      },
      {
        title: "Respuesta a comentarios y mensajes",
        desc: "Gestionamos la interacción con tu comunidad para que ningún cliente quede sin respuesta y tu perfil se mantenga activo.",
      },
    ],
    process: [
      { step: "01", title: "Auditoría y diagnóstico", desc: "Revisamos el estado actual de tus perfiles, definimos la línea de marca y establecemos los objetivos del primer mes." },
      { step: "02", title: "Creación o ajuste de perfiles", desc: "Unificamos el branding en todas las plataformas: foto de perfil, portada, bio y configuración inicial." },
      { step: "03", title: "Planificación de contenido", desc: "Armamos el calendario editorial mensual con los temas, formatos y frecuencia de publicación para cada red." },
      { step: "04", title: "Publicación y seguimiento", desc: "Publicamos según el plan, respondemos interacciones y al cierre del mes te entregamos el reporte de resultados." },
    ],
    price: "Desde $99.990 / mes",
    priceNote: "El valor varía según tus necesidades: desde 2 piezas de contenido al mes hasta producción continua para abastecer todas tus redes · Sin permanencia mínima",
    faqs: [
      {
        q: "¿Cuántas publicaciones incluye el plan mensual?",
        a: "Depende del plan. Partimos desde 2 piezas de contenido al mes y escalamos hasta producción continua según tus objetivos y presupuesto. Te lo detallamos en la cotización.",
      },
      {
        q: "¿Necesito tener ya las cuentas creadas?",
        a: "No es necesario. Si no tienes los perfiles, los creamos y configuramos como parte del proceso inicial sin costo adicional.",
      },
      {
        q: "¿Ustedes crean todo el contenido o necesito enviarles material?",
        a: "Nos encargamos del diseño y la redacción. Si tienes fotos o videos de tu negocio, los usamos para personalizar más el contenido. Si no, trabajamos con recursos de marca.",
      },
      {
        q: "¿Puedo cancelar cuando quiera?",
        a: "Sí. No exigimos permanencia mínima. Si en algún momento decides pausar o cancelar, lo haces sin penalidad.",
      },
    ],
    schemaDescription:
      "Gestión mensual de redes sociales para pymes en Chile. Branding unificado en Instagram, Facebook, TikTok y Google Business Profile.",
  },
  {
    slug: "one-page-corporativo",
    title: "One Page Corporativo",
    metaTitle: "One Page Corporativo | Diseño Web Chile",
    metaDescription:
      "Sitio web corporativo en una página, elegante y optimizado para Google. Ideal para profesionales y pymes en Chile. Desde $99.990 pago único.",
    seoTitle: "One Page Corporativo Chile",
    whatIsTitle: "Por qué un One Page Corporativo mejora tu presencia digital",
    badge: "Para profesionales",
    headline: "Tu empresa, presentada",
    headlineAccent: "con autoridad.",
    intro:
      "Un one page corporativo es la forma más eficiente de tener una presencia digital sólida en Google sin necesidad de un sitio complejo. Todo lo que tus clientes necesitan saber, en una sola página, bien diseñada.",
    whatIs:
      "El one page corporativo es un sitio web que presenta tu empresa o servicio profesional en una sola página de desplazamiento vertical. Tiene secciones definidas — quiénes somos, qué hacemos, por qué elegirnos, contacto — pero el usuario navega fluidamente sin cambiar de URL. Es ideal para profesionales independientes, consultoras, estudios, clínicas, despachos y pymes que necesitan mostrar credibilidad en internet sin la complejidad de un sitio de múltiples páginas. En AM Tecnología lo optimizamos para posicionamiento en Google Chile desde el inicio, con estructura de datos, metadata correcta y velocidad de carga prioritaria.",
    idealFor: [
      "Profesionales independientes: médicos, abogados, arquitectos, psicólogos",
      "Consultoras y estudios que necesitan imagen sólida online",
      "Pymes con oferta clara que quieren aparecer en Google",
      "Negocios que migran desde redes sociales a un sitio propio",
      "Emprendedores que quieren credibilidad digital rápida",
    ],
    features: [
      {
        title: "Diseño corporativo y elegante",
        desc: "Estética profesional adaptada a tu rubro. Sin plantillas genéricas: cada diseño parte desde tu identidad de marca.",
      },
      {
        title: "Secciones estructuradas para SEO",
        desc: "Jerarquía de headings correcta, texto optimizado para las palabras clave de tu rubro y ciudad, y schema markup de organización.",
      },
      {
        title: "Formulario de contacto funcional",
        desc: "Los leads llegan directo a tu correo o se registran en un panel. Cada consulta queda guardada sin depender de WhatsApp.",
      },
      {
        title: "Adaptado a móvil",
        desc: "Más del 70% de las búsquedas en Google Chile se hacen desde celular. El diseño se adapta perfectamente a cualquier pantalla.",
      },
      {
        title: "Dominio y hosting incluidos",
        desc: "Primer año sin costos adicionales. Te ayudamos a elegir y configurar tu dominio .cl o .com según corresponda.",
      },
      {
        title: "Posicionado desde el primer día",
        desc: "Proceso ágil: brief, diseño, ajuste y publicación desde que confirmas la orden. Enfocado en resultados, no en velocidad.",
      },
    ],
    process: [
      { step: "01", title: "Briefing inicial", desc: "Nos cuentas qué haces, para quién y qué imagen quieres proyectar. Eso nos basta para empezar." },
      { step: "02", title: "Diseño y estructura", desc: "Armamos la arquitectura de contenido y el diseño visual orientado a tu público objetivo." },
      { step: "03", title: "Optimización SEO", desc: "Configuramos metadata, schema, velocidad y estructura de palabras clave para tu rubro y ciudad." },
      { step: "04", title: "Publicación", desc: "Tu sitio queda online con dominio, hosting y Analytics configurados. Listo para recibir clientes." },
    ],
    price: "$99.990",
    priceNote: "Pago único · Sin mensualidades · Dominio y hosting incluidos el primer año",
    faqs: [
      {
        q: "¿Es suficiente una sola página para posicionarme en Google?",
        a: "Para la mayoría de los profesionales y pymes, sí. Un one page bien optimizado puede posicionarse en búsquedas locales de tu rubro con mucha efectividad, especialmente cuando la competencia digital en tu ciudad es baja o media.",
      },
      {
        q: "¿Puedo expandirlo a más páginas después?",
        a: "Sí. El one page es un punto de partida. Si más adelante necesitas páginas por servicio, blog o tienda, construimos sobre la misma base técnica.",
      },
      {
        q: "¿Incluye correo corporativo?",
        a: "El sitio incluye dominio. El correo corporativo (@tuempresa.cl) se puede agregar con un costo mensual de Google Workspace, que te orientamos a configurar.",
      },
    ],
    schemaDescription:
      "Sitio web corporativo de una página, optimizado para posicionamiento en Google Chile. Ideal para profesionales y pymes.",
  },
  {
    slug: "ecommerce",
    title: "E-commerce con Pago",
    metaTitle: "Tienda Online Chile | Webpay y MercadoPago",
    metaDescription:
      "Creamos tu tienda online con Webpay y MercadoPago integrado. Vende 24/7 con gestión de inventario y posicionamiento en Google. Desde $199.990 a $399.990 pago único.",
    seoTitle: "Tienda Online Chile con Webpay y MercadoPago",
    whatIsTitle: "Cómo funciona un E-commerce con Webpay y MercadoPago",
    badge: "Vende 24/7",
    headline: "Tu tienda online,",
    headlineAccent: "lista para vender.",
    intro:
      "Un e-commerce bien construido no solo acepta pagos. Aparece en Google cuando alguien busca lo que vendes, convierte visitas en compras y te deja dormir tranquilo mientras las órdenes llegan solas.",
    whatIs:
      "El e-commerce con pago es una tienda online completa con integración de pasarelas de pago chilenas — Webpay Plus de Transbank y MercadoPago — más gestión de inventario, carrito de compras, panel administrativo y optimización para posicionamiento en Google Chile. No vendemos una plantilla: construimos una tienda que funciona como herramienta de negocio real, con la velocidad y estructura que Google necesita para indexarla correctamente y mostrarla a clientes que ya están listos para comprar.",
    idealFor: [
      "Tiendas físicas que quieren vender también online",
      "Emprendedores con productos físicos o digitales",
      "Artesanos, productores y marcas independientes",
      "Negocios que dependen de Instagram para vender y quieren independizarse",
      "Empresas que quieren automatizar su proceso de venta",
    ],
    features: [
      {
        title: "Webpay Plus y MercadoPago",
        desc: "Integración nativa con las dos principales pasarelas de pago en Chile. Acepta débito, crédito y transferencia sin complicaciones.",
      },
      {
        title: "Gestión de inventario",
        desc: "Panel administrativo para agregar productos, controlar stock, gestionar precios y ver órdenes en tiempo real.",
      },
      {
        title: "SEO para productos",
        desc: "Cada página de producto optimizada para aparecer en Google cuando buscan lo que vendes. Schema Product incluido.",
      },
      {
        title: "Carrito y checkout optimizado",
        desc: "Flujo de compra sin fricciones pensado para maximizar la tasa de conversión y reducir el abandono de carrito.",
      },
      {
        title: "Notificaciones automáticas",
        desc: "Confirmación de compra por email al cliente y alerta de nueva orden para ti. Todo automático, sin intervención manual.",
      },
      {
        title: "Mobile-first y veloz",
        desc: "Más del 60% de las compras online en Chile se realizan desde móvil. Tu tienda carga rápido y se ve perfecta en cualquier dispositivo.",
      },
    ],
    process: [
      { step: "01", title: "Catálogo y configuración", desc: "Nos envías tus productos, precios y fotos. Configuramos la tienda con tus colores e identidad de marca." },
      { step: "02", title: "Integración de pagos", desc: "Conectamos Webpay y MercadoPago con tu cuenta. Te orientamos en el proceso de afiliación si aún no tienes." },
      { step: "03", title: "Optimización SEO", desc: "Cada producto y categoría queda optimizado para Google. Schema de producto, metadata y velocidad configurados." },
      { step: "04", title: "Pruebas y lanzamiento", desc: "Hacemos compras de prueba para verificar el flujo completo antes de publicar. Lanzamos cuando todo está impecable." },
    ],
    price: "$199.990 a $399.990",
    priceNote: "Pago único · Sin mensualidades · Dominio y hosting incluidos el primer año",
    faqs: [
      {
        q: "¿Cuántos productos puedo cargar?",
        a: "Sin límite. El sistema soporta desde 5 hasta miles de productos. La velocidad se mantiene independiente del volumen de catálogo.",
      },
      {
        q: "¿Qué comisión cobran por cada venta?",
        a: "Nosotros no cobramos comisión. Webpay y MercadoPago tienen sus propias tarifas (aprox. 2-3% por transacción), que son estándar en Chile.",
      },
      {
        q: "¿Puedo vender productos digitales además de físicos?",
        a: "Sí. Configuramos descarga automática de archivos digitales, cursos, ebooks o cualquier producto inmaterial.",
      },
      {
        q: "¿Cómo funciona el despacho?",
        a: "Te integramos con Chilexpress, Starken o el método de envío que uses. También puedes gestionar retiro en tienda sin costo adicional.",
      },
    ],
    schemaDescription:
      "Tienda online con Webpay y MercadoPago integrado. E-commerce profesional con posicionamiento en Google Chile.",
  },
  {
    slug: "automatizaciones-ia",
    title: "Automatizaciones con IA",
    metaTitle: "Automatizaciones con IA Chile | Chatbots",
    metaDescription:
      "Automatiza tu negocio con inteligencia artificial: chatbots, flujos automáticos en WhatsApp y respuestas que trabajan mientras tú descansas.",
    seoTitle: "Automatizaciones con IA Chile",
    whatIsTitle: "Cómo las automatizaciones con IA reducen trabajo manual",
    badge: "IA Powered",
    headline: "Tu negocio trabajando",
    headlineAccent: "mientras duermes.",
    intro:
      "La inteligencia artificial no es solo para grandes empresas. Una pyme en Chile puede automatizar sus respuestas, calificar leads y cerrar ventas sin contratar más personal — con las herramientas correctas y bien configuradas.",
    whatIs:
      "Las automatizaciones con IA para negocios son flujos de trabajo inteligentes que responden preguntas frecuentes, califican clientes potenciales, agenden citas y notifican al equipo de ventas — todo sin intervención humana. En AM Tecnología integramos chatbots en tu sitio web y en WhatsApp Business API, conectados a tu calendario, tu CRM o tu hoja de productos. El resultado: menos tiempo respondiendo mensajes repetitivos y más tiempo cerrando ventas reales. Todo esto compatible con el posicionamiento en Google Chile de tu página web.",
    idealFor: [
      "Negocios con alto volumen de consultas por WhatsApp",
      "Clínicas, consultorios y centros de estética con agenda",
      "Tiendas online que quieren soporte 24/7 sin personal",
      "Empresas de servicios que necesitan calificar leads automáticamente",
      "Emprendedores que hacen todo solos y necesitan ganar tiempo",
    ],
    features: [
      {
        title: "Chatbot para WhatsApp",
        desc: "Responde preguntas frecuentes, envía listas de precios, agenda citas y deriva a ventas automáticamente, las 24 horas.",
      },
      {
        title: "Chatbot en tu web",
        desc: "Widget de chat en tu sitio que captura leads, responde dudas y los guía hacia la conversión sin que tú hagas nada.",
      },
      {
        title: "Flujos de seguimiento automático",
        desc: "Si un lead no respondió, el sistema le envía un mensaje de seguimiento después de X horas. Sin que tú lo recuerdes.",
      },
      {
        title: "Integración con Google Calendar",
        desc: "Los clientes pueden ver tu disponibilidad y agendar directamente desde WhatsApp o tu web. Cero llamadas de coordinación.",
      },
      {
        title: "Reportes de conversaciones",
        desc: "Panel con métricas de las conversaciones: volumen, preguntas más frecuentes, tasa de respuesta y leads generados.",
      },
      {
        title: "Entrenamiento personalizado",
        desc: "El chatbot aprende sobre tu negocio específico: tus productos, precios, horarios y políticas. No es genérico.",
      },
    ],
    process: [
      { step: "01", title: "Mapeo de flujos", desc: "Identificamos las preguntas más frecuentes de tus clientes y diseñamos los flujos de respuesta." },
      { step: "02", title: "Configuración e integración", desc: "Conectamos el chatbot a WhatsApp Business API y/o tu web. Integramos con tu calendario o CRM si corresponde." },
      { step: "03", title: "Entrenamiento y pruebas", desc: "Cargamos la información de tu negocio, probamos todos los flujos y ajustamos las respuestas." },
      { step: "04", title: "Activación y monitoreo", desc: "Encendemos el sistema y monitoreamos los primeros días para garantizar que todo funcione correctamente." },
    ],
    price: "Desde $199.990",
    priceNote: "Según complejidad del flujo · Consulta por tu caso específico",
    faqs: [
      {
        q: "¿El chatbot suena robótico?",
        a: "No cuando está bien entrenado. Los configuramos con el tono de tu marca y respuestas naturales. La mayoría de los clientes no nota que es automático.",
      },
      {
        q: "¿Necesito tener WhatsApp Business ya configurado?",
        a: "Si ya tienes WhatsApp Business, partimos desde ahí. Si no, te orientamos en el proceso de activación de la API oficial.",
      },
      {
        q: "¿Qué pasa con consultas que el bot no puede responder?",
        a: "El flujo deriva automáticamente al equipo humano cuando la consulta escapa del guión. Nadie queda sin respuesta.",
      },
    ],
    schemaDescription:
      "Automatizaciones con inteligencia artificial para pymes chilenas: chatbots, WhatsApp Business y flujos automáticos.",
  },
  {
    slug: "app-web-saas",
    title: "App Web SaaS",
    metaTitle: "Desarrollo de Aplicaciones Web a Medida Chile | SaaS",
    metaDescription:
      "Desarrollamos aplicaciones web a medida para empresas en Chile. Portales internos, plataformas SaaS y software de gestión. Desde $500.000 pago único.",
    seoTitle: "Desarrollo App Web SaaS Chile",
    whatIsTitle: "Qué necesita una App Web SaaS para crecer en Chile",
    badge: "A medida",
    headline: "La plataforma que tu",
    headlineAccent: "negocio necesita.",
    intro:
      "Cuando tu negocio crece y ninguna herramienta existente se adapta exactamente a lo que necesitas, es el momento de construir tu propia plataforma. En AM Tecnología desarrollamos aplicaciones web SaaS diseñadas para tu operación específica.",
    whatIs:
      "Una app web SaaS (Software as a Service) es una aplicación que vive en internet y a la que accedes desde cualquier navegador, sin instalar nada. Puede ser un sistema de gestión interno para tu equipo, una plataforma de suscripción para tus clientes, un portal de proveedores o cualquier herramienta que automatice procesos críticos de tu negocio. En AM Tecnología desarrollamos estas plataformas desde cero, con arquitectura escalable, panel administrativo personalizado y la capacidad de integrarse con los sistemas que ya usas — incluyendo posicionamiento en Google Chile para el frontend público si la plataforma lo requiere.",
    idealFor: [
      "Empresas que quieren digitalizar procesos internos repetitivos",
      "Emprendedores con un modelo de negocio SaaS o suscripción",
      "Negocios que gestionan clientes, órdenes o inventario manualmente",
      "Startups que necesitan un MVP funcional rápido",
      "Empresas que quieren crear su propio producto de software",
    ],
    features: [
      {
        title: "Desarrollo a medida",
        desc: "No usamos plantillas. Cada plataforma se diseña y construye desde cero según los requerimientos específicos de tu operación.",
      },
      {
        title: "Panel administrativo",
        desc: "Interfaz de gestión intuitiva para tu equipo: usuarios, roles, permisos, reportes y configuración sin necesidad de programar.",
      },
      {
        title: "Autenticación y seguridad",
        desc: "Sistema de login seguro, gestión de sesiones, roles por usuario y encriptación de datos sensibles.",
      },
      {
        title: "Integraciones API",
        desc: "Conectamos tu plataforma con Stripe, MercadoPago, Google Calendar, Notion, HubSpot y cualquier servicio con API disponible.",
      },
      {
        title: "Escalable en la nube",
        desc: "Arquitectura diseñada para crecer. Tu plataforma soporta 10 usuarios o 10.000 sin necesidad de reescribir código.",
      },
      {
        title: "Soporte y mantenimiento",
        desc: "No te dejamos solo después del lanzamiento. Ofrecemos planes de soporte para mantener la plataforma actualizada y segura.",
      },
    ],
    process: [
      { step: "01", title: "Levantamiento de requerimientos", desc: "Sesión de trabajo para mapear todos los flujos, usuarios y funciones que necesita la plataforma." },
      { step: "02", title: "Diseño de arquitectura", desc: "Definimos la base de datos, la estructura de la aplicación y las integraciones necesarias." },
      { step: "03", title: "Desarrollo iterativo", desc: "Construimos por módulos con entregas parciales para que puedas ver el avance y ajustar en el camino." },
      { step: "04", title: "QA, lanzamiento y capacitación", desc: "Pruebas completas antes de publicar. Capacitamos a tu equipo y entregamos documentación técnica." },
    ],
    price: "Desde $500.000",
    priceNote: "Según alcance del proyecto · Solicita una reunión de diagnóstico gratuita",
    faqs: [
      {
        q: "¿Cuánto tiempo tarda desarrollar una app web?",
        a: "Depende del alcance. Un MVP básico puede estar listo en 4-6 semanas. Una plataforma más compleja toma entre 2 y 4 meses. Lo definimos en el levantamiento.",
      },
      {
        q: "¿Puedo ser dueño del código?",
        a: "Sí, el código es tuyo. Al terminar el proyecto te entregamos el repositorio completo con toda la documentación.",
      },
      {
        q: "¿Qué tecnologías usan?",
        a: "Next.js, React, TypeScript y PostgreSQL principalmente. Usamos tecnologías maduras con amplia comunidad de soporte para garantizar longevidad.",
      },
      {
        q: "¿Pueden mantener la plataforma después del lanzamiento?",
        a: "Sí. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, nuevas funciones y soporte técnico.",
      },
    ],
    schemaDescription:
      "Desarrollo de aplicaciones web SaaS a medida para empresas en Chile. Plataformas escalables con panel administrativo.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

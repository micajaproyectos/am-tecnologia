export interface CityData {
  slug: string;
  name: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  context: string;
  marketPoints: { title: string; desc: string }[];
  whyUs: string;
  localFaqs: { q: string; a: string }[];
}

export const CITIES: CityData[] = [
  {
    slug: "puerto-montt",
    name: "Puerto Montt",
    region: "Región de Los Lagos",
    metaTitle: "Posicionamiento en Google Puerto Montt",
    metaDescription:
      "Posicionamiento web para empresas de Puerto Montt y el sur de Chile. Creamos páginas optimizadas para aparecer en Google y captar nuevos clientes.",
    headline: "Tu empresa en Puerto Montt,",
    headlineAccent: "visible en Google.",
    intro:
      "Puerto Montt es la capital comercial del sur de Chile. Si tu negocio no aparece en Google cuando alguien busca tu servicio en la ciudad, estás perdiendo clientes frente a competidores que sí lo hacen.",
    context:
      "Puerto Montt concentra una de las economías regionales más activas del país, impulsada por la industria acuícola, el turismo patagónico y el comercio de toda la Región de Los Lagos. La ciudad recibe flujo de visitantes de Chiloé, Osorno y las rutas hacia la Patagonia, lo que la convierte en un mercado de alta demanda para servicios locales. Sin embargo, muchos negocios en Puerto Montt aún no tienen presencia digital optimizada: sus clientes los buscan en Google y no los encuentran. Esa brecha es exactamente donde AM Tecnología trabaja: creamos páginas web que posicionan tu negocio en las búsquedas de personas que ya están listas para contratar o comprar en Puerto Montt.",
    marketPoints: [
      {
        title: "Alta actividad de búsqueda local",
        desc: "Miles de búsquedas mensuales en Google con términos como 'servicios en Puerto Montt', 'comprar en Puerto Montt' y nombres de rubros específicos.",
      },
      {
        title: "Turismo que busca en Google",
        desc: "Puerto Montt recibe turistas durante todo el año. Los visitantes usan Google para encontrar restaurantes, hospedajes, actividades y servicios locales.",
      },
      {
        title: "Mercado en crecimiento",
        desc: "La expansión acuícola y el desarrollo urbano del Gran Puerto Montt generan demanda constante de servicios profesionales, proveedores y comercio.",
      },
      {
        title: "Baja competencia digital",
        desc: "A diferencia de Santiago, muchos rubros en Puerto Montt tienen poca o nula presencia en Google. Posicionarte ahora es más fácil y más barato.",
      },
    ],
    whyUs:
      "Trabajamos con empresas de Puerto Montt de forma 100% remota. No necesitas visitarnos ni esperar una reunión presencial. En menos de 48 horas tienes tu sitio web publicado, optimizado para aparecer en Google cuando alguien en Puerto Montt busca lo que tú ofreces.",
    localFaqs: [
      {
        q: "¿Cuánto tarda en aparecer mi negocio en Google en Puerto Montt?",
        a: "Los primeros resultados orgánicos pueden verse entre 2 y 8 semanas desde que tu sitio está publicado. Para búsquedas locales en Puerto Montt con baja competencia, el posicionamiento puede ser más rápido.",
      },
      {
        q: "¿Funcionan con negocios de la industria acuícola o turismo?",
        a: "Sí. Hemos trabajado con empresas de distintos rubros en el sur de Chile. Adaptamos el contenido y las palabras clave al sector específico de tu negocio.",
      },
      {
        q: "¿Necesito estar en Puerto Montt para contratarlos?",
        a: "No. Trabajamos 100% remoto. Solo necesitamos una videollamada o conversación por WhatsApp para conocer tu negocio y empezar.",
      },
    ],
  },
  {
    slug: "temuco",
    name: "Temuco",
    region: "Región de La Araucanía",
    metaTitle: "Posicionamiento en Google Temuco",
    metaDescription:
      "Posicionamiento en Google para negocios en Temuco y La Araucanía. Tu empresa visible cuando tus clientes te buscan, antes que tu competencia regional.",
    headline: "Más clientes en Temuco",
    headlineAccent: "desde Google.",
    intro:
      "Temuco es el corazón comercial de La Araucanía. Con una economía diversa y una población activa digitalmente, posicionarte en Google en Temuco es hoy una de las mejores inversiones para tu negocio.",
    context:
      "Temuco es la capital regional de La Araucanía y uno de los principales centros comerciales del sur de Chile. Su economía abarca el comercio, los servicios profesionales, la industria forestal, el agro y un creciente sector de turismo cultural mapuche. La ciudad tiene una población joven y conectada: el uso de smartphones y búsquedas en Google es comparable al de las grandes ciudades. A pesar de esto, muchos negocios locales todavía no tienen una presencia digital optimizada, lo que significa que sus clientes potenciales buscan en Google y encuentran a la competencia. AM Tecnología crea páginas web que posicionan tu empresa en los primeros resultados de Google para búsquedas en Temuco, capturando clientes que ya tienen intención de compra.",
    marketPoints: [
      {
        title: "Centro comercial regional",
        desc: "Temuco atrae compradores y clientes de toda La Araucanía. Aparecer en Google amplifica tu alcance más allá de la ciudad.",
      },
      {
        title: "Creciente economía de servicios",
        desc: "Profesionales de salud, educación, derecho, construcción y tecnología tienen alta demanda en Temuco y poca visibilidad digital.",
      },
      {
        title: "Universidad y vida universitaria",
        desc: "La presencia de la UFRO y otras instituciones genera una base de jóvenes que busca todo en Google antes de decidir.",
      },
      {
        title: "Turismo hacia La Araucanía",
        desc: "Temuco es el punto de entrada al turismo de la región. Negocios de servicios y hospedaje tienen alto potencial de visibilidad online.",
      },
    ],
    whyUs:
      "Conocemos el mercado del sur de Chile y adaptamos el posicionamiento de tu negocio a las búsquedas reales que hacen los clientes en Temuco. Todo remoto, entrega en 48 horas, sin mensualidades.",
    localFaqs: [
      {
        q: "¿Pueden posicionar mi negocio para búsquedas en Temuco específicamente?",
        a: "Sí. Optimizamos el contenido, las palabras clave y los datos estructurados para que Google muestre tu negocio a personas que buscan en Temuco y La Araucanía.",
      },
      {
        q: "¿Qué rubros tienen más oportunidad en Temuco?",
        a: "Servicios profesionales (salud, legal, construcción), comercio local, turismo y restaurantes tienen alta demanda de búsqueda y baja presencia digital en Temuco.",
      },
    ],
  },
  {
    slug: "valdivia",
    name: "Valdivia",
    region: "Región de Los Ríos",
    metaTitle: "Posicionamiento en Google Valdivia",
    metaDescription:
      "Posicionamiento en Google para empresas en Valdivia. Páginas web que te ubican en la Región de Los Ríos y atraen clientes desde el primer día.",
    headline: "Tu negocio en Valdivia,",
    headlineAccent: "en Google hoy.",
    intro:
      "Valdivia es una ciudad en crecimiento, con turismo, industria y una comunidad universitaria activa. Si tu negocio no aparece en Google, tus clientes van donde sí los encuentran.",
    context:
      "Valdivia es la capital de la Región de Los Ríos y una ciudad con identidad propia: cervecería artesanal, turismo fluvial, gastronomía y una fuerte presencia universitaria gracias a la UACh. El mercado local es dinámico y diverso, con demanda constante de servicios profesionales, turismo, comercio y alimentación. Lo que muchos negocios en Valdivia aún no aprovechan es que sus clientes buscan en Google antes de comprar o contratar. Una página web bien optimizada convierte esas búsquedas en contactos reales. AM Tecnología crea sitios web con posicionamiento en Google Chile enfocados en las búsquedas locales de Valdivia, para que tu negocio aparezca justo cuando alguien lo necesita.",
    marketPoints: [
      {
        title: "Ciudad universitaria activa",
        desc: "La UACh y otras instituciones concentran una población joven que busca servicios, productos y experiencias en Google antes de decidir.",
      },
      {
        title: "Turismo fluvial y ecológico",
        desc: "Valdivia atrae visitantes nacionales e internacionales que usan Google para planificar actividades, hospedaje y restaurantes.",
      },
      {
        title: "Gastronomía y comercio creciente",
        desc: "El sector gastronómico y el comercio local de Valdivia tienen alta demanda de búsqueda y oportunidad de posicionamiento.",
      },
      {
        title: "Expansión de servicios profesionales",
        desc: "Médicos, abogados, constructores y consultores en Valdivia tienen poca presencia digital en comparación con la demanda real.",
      },
    ],
    whyUs:
      "Trabajamos con negocios de Valdivia de forma completamente remota. Entendemos el mercado del sur y optimizamos tu presencia en Google para las búsquedas reales de tus clientes en la ciudad y la región.",
    localFaqs: [
      {
        q: "¿Funciona para negocios de turismo en Valdivia?",
        a: "Sí, es uno de los rubros con más oportunidad. Posicionamos tu negocio para búsquedas como 'que hacer en Valdivia', 'hospedaje Valdivia' o 'tours fluviales Valdivia'.",
      },
      {
        q: "¿Puedo aparecer en Google Maps también?",
        a: "Sí. La optimización incluye configuración de tu perfil en Google Business Profile (Google Maps), que es independiente del sitio web pero se potencia cuando ambos están bien configurados.",
      },
    ],
  },
  {
    slug: "osorno",
    name: "Osorno",
    region: "Región de Los Lagos",
    metaTitle: "Posicionamiento en Google Osorno",
    metaDescription:
      "Posicionamiento en Google para empresas en Osorno. Tu negocio visible en la Región de Los Lagos y en la ruta entre el sur y la Patagonia chilena.",
    headline: "Osorno en Google —",
    headlineAccent: "primero que tu competencia.",
    intro:
      "Osorno es una ciudad con economía diversa y mercado activo. Posicionarte en Google antes que tu competencia local es más fácil aquí que en las grandes ciudades — y el efecto es inmediato.",
    context:
      "Osorno es una de las ciudades con mayor actividad ganadera y comercial del sur de Chile. Su economía se sustenta en la industria láctea, el comercio regional, los servicios y una creciente actividad turística hacia los Lagos y la Patagonia. La ciudad tiene una clase empresarial activa y en expansión, pero con presencia digital aún limitada en muchos rubros. Esa brecha es una ventaja competitiva real: en Osorno, posicionarse en Google para búsquedas locales de tu rubro puede hacerse con menos competencia que en ciudades más grandes. AM Tecnología aprovecha esa ventana para establecer tu marca en los primeros resultados de Google en Osorno, generando consultas y clientes desde el primer mes.",
    marketPoints: [
      {
        title: "Economía ganadera y agroindustrial",
        desc: "Proveedores, servicios veterinarios, transporte y logística tienen alta demanda en Osorno con poca visibilidad digital.",
      },
      {
        title: "Baja competencia digital",
        desc: "Muchos rubros en Osorno no tienen competidores bien posicionados en Google. Entrar ahora es una ventaja estratégica.",
      },
      {
        title: "Comercio regional activo",
        desc: "Osorno sirve a comunas aledañas como Río Negro, La Unión y zonas rurales. Aparecer en Google amplía tu alcance regional.",
      },
      {
        title: "Crecimiento urbano",
        desc: "Nuevos proyectos inmobiliarios, servicios profesionales y comercio en expansión generan demanda constante de proveedores locales.",
      },
    ],
    whyUs:
      "Conocemos el mercado del sur y adaptamos cada sitio web al rubro y la audiencia específica de Osorno. Trabajo remoto, entrega en 48 horas y sin mensualidades.",
    localFaqs: [
      {
        q: "¿Cuánta competencia existe en Google en Osorno?",
        a: "En la mayoría de los rubros, la competencia digital en Osorno es baja. Eso significa que con un sitio web bien optimizado puedes posicionarte rápidamente en los primeros resultados.",
      },
      {
        q: "¿Pueden crear páginas en español y adaptadas al sur de Chile?",
        a: "Sí. Todo el contenido está en español y lo adaptamos al contexto local, los servicios regionales y las búsquedas reales de Osorno.",
      },
    ],
  },
  {
    slug: "concepcion",
    name: "Concepción",
    region: "Región del Biobío",
    metaTitle: "Posicionamiento en Google Concepción",
    metaDescription:
      "Posicionamiento en Google para empresas en Concepción y el Gran Biobío. Páginas web que te destacan en la segunda ciudad más grande de Chile.",
    headline: "Concepción busca",
    headlineAccent: "tu negocio en Google.",
    intro:
      "Concepción es la segunda ciudad más grande de Chile. Un mercado con millones de búsquedas locales cada mes y una oportunidad real para que tu negocio sea encontrado antes que la competencia.",
    context:
      "El Gran Concepción, que incluye Concepción, Talcahuano, Hualpén, San Pedro de la Paz y Coronel, concentra más de un millón de habitantes y una de las economías regionales más importantes del país. Con una fuerte presencia universitaria (UdeC, UCSC, UBB), industria portuaria, servicios y un comercio muy activo, la ciudad genera millones de búsquedas locales en Google cada mes. A pesar de esto, muchos negocios en Concepción no tienen presencia digital optimizada. AM Tecnología crea páginas web con posicionamiento en Google Chile para empresas del Gran Concepción, conectándolas con clientes que ya están buscando activamente lo que ofrecen.",
    marketPoints: [
      {
        title: "Segundo mercado más grande de Chile",
        desc: "Más de un millón de habitantes generan volumen de búsqueda comparable a algunas regiones completas del país.",
      },
      {
        title: "Ciudad universitaria con alta actividad digital",
        desc: "Tres universidades importantes y miles de estudiantes que buscan todo en Google antes de comprar o contratar.",
      },
      {
        title: "Industria y servicios en crecimiento",
        desc: "Talcahuano, San Pedro y el Gran Concepción tienen alta demanda de proveedores industriales, logística y servicios B2B.",
      },
      {
        title: "Turismo y gastronomía activos",
        desc: "El centro de Concepción y zonas aledañas tienen oferta gastronómica y de entretenimiento con alto potencial de búsqueda local.",
      },
    ],
    whyUs:
      "Concepción tiene el volumen de búsquedas de una gran ciudad y aún hay espacio para posicionarse en muchos rubros. Creamos tu presencia en Google antes de que llegue más competencia.",
    localFaqs: [
      {
        q: "¿Pueden posicionar para el Gran Concepción completo?",
        a: "Sí. Optimizamos para búsquedas en Concepción, Talcahuano, San Pedro de la Paz, Coronel y toda el área metropolitana del Biobío.",
      },
      {
        q: "¿Mi negocio de servicios profesionales puede posicionarse en Concepción?",
        a: "Absolutamente. Médicos, abogados, arquitectos y consultores en Concepción tienen alta demanda de búsqueda. Es uno de los rubros con más oportunidad de posicionamiento.",
      },
    ],
  },
  {
    slug: "santiago",
    name: "Santiago",
    region: "Región Metropolitana",
    metaTitle: "Posicionamiento en Google Santiago",
    metaDescription:
      "Posicionamiento en Google para pymes en Santiago. Páginas web que te destacan en el mercado digital más competitivo de Chile. Desde $99.990.",
    headline: "Santiago es enorme.",
    headlineAccent: "Tu nicho, no.",
    intro:
      "Millones de búsquedas en Google al día en Santiago. La clave no es competir con todos — es aparecer exactamente para quienes buscan lo que tú ofreces, en la comuna o sector donde atiendes.",
    context:
      "Santiago concentra más del 40% de la población de Chile y genera el mayor volumen de búsquedas locales en Google del país. Cada día, cientos de miles de personas buscan servicios, productos y proveedores en Santiago. La buena noticia para las pymes es que Google favorece los resultados locales: un negocio bien optimizado en una comuna específica — Providencia, Las Condes, Ñuñoa, Maipú, San Bernardo — puede superar en visibilidad a grandes empresas que no tienen su presencia local configurada correctamente. AM Tecnología crea páginas web con posicionamiento en Google Chile orientadas al nicho y la ubicación específica de tu negocio en Santiago, para que aparezcas exactamente donde tus clientes buscan.",
    marketPoints: [
      {
        title: "El mercado más grande del país",
        desc: "Más de 7 millones de personas, millones de búsquedas diarias. Con el nicho correcto, tu negocio puede captar un flujo constante de clientes.",
      },
      {
        title: "Posicionamiento por comuna",
        desc: "Google muestra resultados locales por ubicación. Un sitio optimizado para 'servicio en Providencia' o 'empresa en Las Condes' tiene ventaja sobre los genéricos.",
      },
      {
        title: "Alta intención de compra",
        desc: "Los usuarios en Santiago que buscan un servicio específico en Google suelen tener alta intención de contratar o comprar en el corto plazo.",
      },
      {
        title: "Competencia alta, nichos disponibles",
        desc: "Santiago es competitivo, pero hay cientos de nichos de servicio y sectores geográficos con baja presencia digital. La estrategia es clave.",
      },
    ],
    whyUs:
      "No hacemos páginas genéricas. En Santiago la estrategia importa: identificamos las búsquedas con mayor oportunidad para tu rubro y ubicación, y construimos tu presencia digital sobre esa base.",
    localFaqs: [
      {
        q: "¿Puedo competir en Google en Santiago si soy una pyme pequeña?",
        a: "Sí, si la estrategia es correcta. El posicionamiento local por comuna o nicho es donde las pymes tienen ventaja real sobre empresas grandes con presencia genérica.",
      },
      {
        q: "¿Cuánto tiempo toma posicionarse en Google en Santiago?",
        a: "En rubros con alta competencia puede tomar entre 2 y 6 meses. En nichos específicos con menos competencia digital, los primeros resultados pueden verse antes de 30 días.",
      },
      {
        q: "¿Optimizan para una comuna específica?",
        a: "Sí. Si atiendes solo en Providencia, Las Condes, Maipú o cualquier otra comuna, ajustamos el contenido y la estrategia de keywords para ese sector específico.",
      },
    ],
  },
  {
    slug: "coyhaique",
    name: "Coyhaique",
    region: "Región de Aysén",
    metaTitle: "Posicionamiento en Google Coyhaique",
    metaDescription:
      "Posicionamiento en Google para empresas en Coyhaique y Aysén. Páginas web que conectan tu negocio con clientes locales y turistas de la Patagonia chilena.",
    headline: "Coyhaique en Google —",
    headlineAccent: "sin barreras de distancia.",
    intro:
      "Coyhaique es pequeña en población pero grande en potencial digital. El turismo de la Patagonia genera búsquedas constantes en Google, y la mayoría de los negocios locales todavía no tienen presencia optimizada.",
    context:
      "Coyhaique es la capital de la Región de Aysén, una de las zonas con mayor crecimiento turístico de Chile en los últimos años. La Carretera Austral, las lagunas, los parques nacionales y el fly fishing atraen a viajeros nacionales e internacionales que planifican todo su viaje usando Google. Los negocios de Coyhaique — hospedajes, guías, restaurantes, arriendo de vehículos, servicios locales — tienen una oportunidad excepcional de captar esos visitantes en el momento en que los buscan, antes de llegar a la ciudad. Además, para los residentes, Google es el principal medio de búsqueda de servicios locales. AM Tecnología crea páginas web con posicionamiento en Google Chile para negocios de Coyhaique y la Región de Aysén, conectándolos con clientes que ya están buscando lo que ofrecen.",
    marketPoints: [
      {
        title: "Turismo de alto valor",
        desc: "Viajeros que buscan Coyhaique en Google tienen alta capacidad de gasto y alta intención de compra. Una presencia digital optimizada los capta directamente.",
      },
      {
        title: "Baja competencia digital",
        desc: "La mayoría de los negocios en Coyhaique no tienen sitio web optimizado. Posicionarte ahora significa liderar las búsquedas en tu rubro.",
      },
      {
        title: "Búsquedas internacionales",
        desc: "Turistas de Argentina, Europa y Norteamérica buscan servicios en Coyhaique en Google. Una página bien configurada capta ese tráfico.",
      },
      {
        title: "Mercado local sin saturación digital",
        desc: "Para servicios profesionales y comercio local, la competencia digital en Coyhaique es muy baja. El retorno de inversión es alto.",
      },
    ],
    whyUs:
      "La distancia no es un problema. Trabajamos 100% remoto con negocios de la Patagonia chilena. En 48 horas tu sitio está publicado y comenzando a posicionarse en Google.",
    localFaqs: [
      {
        q: "¿Pueden crear páginas para negocios turísticos en Coyhaique?",
        a: "Es uno de los rubros donde más podemos ayudar. Optimizamos tu sitio para búsquedas como 'lodge Coyhaique', 'tours Carretera Austral' o 'arriendo autos Coyhaique'.",
      },
      {
        q: "¿En idioma inglés también?",
        a: "Podemos incluir una versión en inglés del sitio para captar turistas internacionales. Es una opción adicional que conversamos según el proyecto.",
      },
    ],
  },
  {
    slug: "punta-arenas",
    name: "Punta Arenas",
    region: "Región de Magallanes",
    metaTitle: "Posicionamiento en Google Punta Arenas",
    metaDescription:
      "Posicionamiento en Google para empresas en Punta Arenas y Magallanes. Tu negocio visible en el extremo sur del mundo, captando clientes y turistas.",
    headline: "Punta Arenas al mundo",
    headlineAccent: "a través de Google.",
    intro:
      "Punta Arenas es una ciudad con identidad única y un mercado turístico creciente. Si tu negocio no aparece en Google, estás invisible para los miles de viajeros y residentes que buscan servicios locales.",
    context:
      "Punta Arenas es la capital de la Región de Magallanes y la ciudad más austral del mundo con más de 100.000 habitantes. Es el punto de partida para la Patagonia chilena y argentina, la Antártica y el Estrecho de Magallanes. El turismo de naturaleza y aventura genera demanda constante de servicios locales: hospedajes, restaurantes, arriendo de vehículos, guías y productos artesanales. Al mismo tiempo, la economía local —comercio, servicios públicos, salud, educación— tiene una comunidad activa que busca proveedores en Google. En AM Tecnología creamos páginas web con posicionamiento en Google Chile para negocios de Punta Arenas, asegurando que aparezcas en búsquedas locales y también en las búsquedas de turistas que planifican su viaje.",
    marketPoints: [
      {
        title: "Turismo de naturaleza y aventura",
        desc: "Miles de turistas anuales que buscan 'qué hacer en Punta Arenas', 'hospedaje Magallanes' y servicios específicos en Google antes de viajar.",
      },
      {
        title: "Ciudad con economía diversa",
        desc: "Comercio, servicios, salud y educación generan demanda de búsqueda local constante para negocios bien posicionados.",
      },
      {
        title: "Zona libre de impuestos",
        desc: "La Zona Franca atrae visitantes que buscan productos específicos. Una presencia digital conecta tu negocio con compradores antes de que lleguen.",
      },
      {
        title: "Mercado digital emergente",
        desc: "La presencia web en Punta Arenas está en etapas tempranas. Quienes se posicionen ahora tendrán ventaja por años.",
      },
    ],
    whyUs:
      "Trabajamos con negocios en toda la Patagonia. La distancia no es una barrera: entrega remota en 48 horas, sin mensualidades y con soporte continuo.",
    localFaqs: [
      {
        q: "¿Pueden crear páginas para negocios de la Zona Franca?",
        a: "Sí. Adaptamos el contenido y la estrategia de keywords para negocios que venden en la Zona Franca de Punta Arenas, tanto a residentes como a visitantes.",
      },
      {
        q: "¿Cómo atraen turistas internacionales desde Google?",
        a: "Optimizamos el sitio para búsquedas en español e inglés, con contenido sobre Punta Arenas y Magallanes que atrae tráfico orgánico de turistas que planifican su viaje.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}

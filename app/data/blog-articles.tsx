import { RxChevronLeft } from "react-icons/rx";

export type BlogArticleData = {
  slug: string;
  category: string;
  readTime: string;
  heading: string;
  image: {
    src: string;
    alt?: string;
  };
  postDetails: Array<{
    title: string;
    description: string;
  }>;
  introduction: string;
  sections: Array<{
    heading: string;
    content: string[];
  }>;
  conclusion: string;
};

export const blogArticles: BlogArticleData[] = [
  {
    slug: "guia-completa-subastas-judiciales",
    category: "Subastas",
    readTime: "8 min lectura",
    heading: "Guía completa: Cómo participar en una subasta judicial",
    image: {
      src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80",
      alt: "Guía subastas judiciales",
    },
    postDetails: [
      { title: "Publicado el", description: "15 Dic 2024" },
      { title: "Por", description: "Equipo SILOS" },
    ],
    introduction:
      "Las subastas judiciales representan una oportunidad única para adquirir bienes inmuebles a precios competitivos. Sin embargo, es fundamental conocer el proceso y los requisitos para participar de manera exitosa y segura. En esta guía completa, te explicamos todo lo que necesitas saber.",
    sections: [
      {
        heading: "¿Qué es una subasta judicial?",
        content: [
          "Una subasta judicial es un procedimiento regulado por la Ley de Enjuiciamiento Civil mediante el cual se venden bienes embargados para satisfacer deudas. Este proceso es completamente legal y transparente, supervisado por los tribunales.",
          "Los bienes subastados pueden ser inmuebles (viviendas, locales, terrenos), vehículos, maquinaria u otros activos de valor. En la mayoría de casos, los bienes se venden por debajo de su valor de mercado, lo que representa una oportunidad de inversión.",
          "Es importante destacar que las subastas judiciales están abiertas a cualquier persona física o jurídica que cumpla con los requisitos establecidos, sin necesidad de ser inversor profesional.",
        ],
      },
      {
        heading: "Requisitos para participar",
        content: [
          "Para participar en una subasta judicial, es necesario cumplir con los siguientes requisitos básicos:",
          "1. Ser mayor de edad y tener plena capacidad jurídica y de obrar.",
          "2. Constituir un depósito previo, generalmente entre el 5% y el 30% del valor de tasación del bien.",
          "3. Presentar la documentación requerida: DNI/NIE, justificante del depósito y, en algunos casos, certificado de estar al corriente de obligaciones tributarias.",
          "El depósito puede realizarse mediante transferencia bancaria, cheque bancario conformado o aval bancario, según lo establecido en cada subasta específica.",
        ],
      },
      {
        heading: "Proceso paso a paso",
        content: [
          "El proceso de una subasta judicial sigue estas etapas:",
          "1. Búsqueda de subastas: Consulta el Portal de Subastas BOE o la web del juzgado correspondiente para identificar bienes de tu interés.",
          "2. Análisis del bien: Revisa detenidamente el anuncio de subasta, las cargas que pueda tener el inmueble y solicita visitar la propiedad si es posible.",
          "3. Constitución del depósito: Realiza el depósito previo en el plazo establecido, conservando el justificante.",
          "4. Presentación de oferta: En subastas electrónicas, puedes pujar online. En subastas presenciales, deberás acudir al juzgado el día señalado.",
          "5. Adjudicación: Si resultas adjudicatario, deberás pagar el resto del precio en el plazo establecido (normalmente 20 días).",
          "6. Toma de posesión: Una vez pagado el precio total, se te entregará el testimonio del auto de adjudicación para inscribir el bien a tu nombre.",
        ],
      },
      {
        heading: "Consejos importantes",
        content: [
          "Antes de pujar en una subasta judicial, ten en cuenta estas recomendaciones:",
          "- Investiga exhaustivamente el bien: estado de conservación, cargas, ocupación, deudas de comunidad, etc.",
          "- Visita el inmueble siempre que sea posible. Si está ocupado, infórmate sobre los procedimientos de desalojo.",
          "- Calcula todos los costes: precio de adjudicación, impuestos (ITP o IVA), gastos de registro, posibles reformas, etc.",
          "- Consulta con un abogado especializado en subastas judiciales para evitar sorpresas desagradables.",
          "- No te dejes llevar por la emoción del momento. Establece un precio máximo y respétalo.",
        ],
      },
    ],
    conclusion:
      "Participar en subastas judiciales puede ser una excelente oportunidad de inversión, pero requiere preparación, conocimiento y prudencia. En SILOS te ofrecemos asesoramiento especializado para que puedas invertir con total seguridad y confianza. Contacta con nuestro equipo para recibir orientación personalizada sobre tu próxima inversión en subastas.",
  },
  {
    slug: "divorcios-aspectos-legales-clave",
    category: "Familia",
    readTime: "6 min lectura",
    heading: "Divorcios: Aspectos legales clave que debes conocer",
    image: {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80",
      alt: "Derecho de familia",
    },
    postDetails: [
      { title: "Publicado el", description: "10 Dic 2024" },
      { title: "Por", description: "Equipo SILOS" },
    ],
    introduction:
      "El divorcio es un proceso legal complejo que requiere conocer tus derechos y obligaciones. En esta guía te explicamos los aspectos fundamentales del divorcio en España, desde los tipos de procedimiento hasta las medidas paternofiliales que se deben regular.",
    sections: [
      {
        heading: "Tipos de divorcio",
        content: [
          "En España existen dos tipos principales de divorcio: el divorcio de mutuo acuerdo y el divorcio contencioso.",
          "El divorcio de mutuo acuerdo se produce cuando ambos cónyuges están de acuerdo en divorciarse y han llegado a un consenso sobre todas las medidas: custodia de los hijos, pensiones, uso de la vivienda, etc. Es más rápido y económico.",
          "El divorcio contencioso ocurre cuando no hay acuerdo entre las partes. En este caso, será el juez quien decida sobre las medidas a adoptar tras escuchar a ambas partes y valorar las pruebas presentadas.",
        ],
      },
      {
        heading: "Medidas paternofiliales",
        content: [
          "Las medidas paternofiliales son las decisiones que se deben tomar respecto a los hijos menores o dependientes:",
          "1. Custodia: Puede ser exclusiva de uno de los progenitores o compartida. La tendencia actual favorece la custodia compartida cuando es viable.",
          "2. Régimen de visitas: Establece cómo y cuándo el progenitor no custodio pasará tiempo con los hijos.",
          "3. Pensión de alimentos: Contribución económica para cubrir las necesidades de los hijos.",
          "4. Uso de la vivienda familiar: Normalmente se atribuye al progenitor custodio mientras haya hijos menores.",
        ],
      },
      {
        heading: "Pensión compensatoria",
        content: [
          "La pensión compensatoria es diferente de la pensión de alimentos. Se establece cuando uno de los cónyuges queda en situación de desequilibrio económico tras el divorcio.",
          "Para su concesión, se valoran factores como: la duración del matrimonio, la edad y estado de salud de los cónyuges, la cualificación profesional y posibilidades de acceso al empleo, la dedicación pasada y futura a la familia, y la pérdida eventual de un derecho de pensión.",
          "La pensión puede ser temporal o indefinida, dependiendo de las circunstancias concretas del caso.",
        ],
      },
      {
        heading: "Liquidación del régimen económico",
        content: [
          "Junto con el divorcio debe procederse a la liquidación del régimen económico matrimonial.",
          "Si el matrimonio se celebró en régimen de gananciales, deben liquidarse los bienes comunes y repartirse entre ambos cónyuges. Si hay desacuerdo sobre el inventario o valoración de bienes, el juez decidirá.",
          "En régimen de separación de bienes, cada cónyuge conserva sus propios bienes, pero pueden existir bienes compartidos que deban repartirse.",
        ],
      },
    ],
    conclusion:
      "Un proceso de divorcio requiere asesoramiento legal especializado para proteger tus derechos e intereses. En SILOS contamos con amplia experiencia en derecho de familia y te ofrecemos un trato cercano y profesional. Contacta con nosotros para recibir orientación personalizada sobre tu situación.",
  },
  {
    slug: "herencias-guia-practica-sucesiones",
    category: "Civil",
    readTime: "7 min lectura",
    heading: "Herencias: Guía práctica sobre sucesiones legales",
    image: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
      alt: "Herencias y sucesiones",
    },
    postDetails: [
      { title: "Publicado el", description: "5 Dic 2024" },
      { title: "Por", description: "Equipo SILOS" },
    ],
    introduction:
      "La gestión de una herencia implica cumplir con diversos trámites legales y fiscales. En esta guía te explicamos todo el proceso sucesorio, desde la aceptación de la herencia hasta la adjudicación final de los bienes, para que puedas afrontarlo con seguridad.",
    sections: [
      {
        heading: "Tipos de sucesión",
        content: [
          "Existen dos tipos de sucesión: testamentaria e intestada (también llamada abintestato).",
          "La sucesión testamentaria se produce cuando el fallecido ha dejado testamento. En este documento ha expresado su voluntad sobre cómo desea repartir sus bienes. El testamento debe cumplir ciertos requisitos legales y respetar las legítimas de los herederos forzosos.",
          "La sucesión intestada ocurre cuando no existe testamento o este es nulo. En estos casos, la ley establece quiénes son los herederos y en qué proporción heredan: descendientes, ascendientes, cónyuge, hermanos, etc.",
        ],
      },
      {
        heading: "Proceso de aceptación",
        content: [
          "Los herederos tienen derecho a aceptar o renunciar a la herencia. La aceptación puede ser expresa o tácita.",
          "Antes de aceptar, es fundamental realizar un inventario de los bienes y deudas del fallecido. Si las deudas superan el valor de los bienes, puede interesar renunciar o aceptar a beneficio de inventario.",
          "La aceptación a beneficio de inventario permite que los herederos no respondan de las deudas hereditarias con su patrimonio personal, sino solo con los bienes heredados.",
          "El plazo para deliberar es de 30 días una vez realizado el inventario, aunque puede extenderse por otros 30 días si es necesario.",
        ],
      },
      {
        heading: "Trámites y documentación",
        content: [
          "Los principales trámites en una sucesión son:",
          "1. Obtención del certificado de defunción y del certificado de últimas voluntades (para saber si hay testamento).",
          "2. Si hay testamento, solicitar copia autorizada al notario ante quien se otorgó.",
          "3. Realizar el cuaderno particional: documento donde se relacionan todos los bienes, deudas, herederos y se adjudican los bienes.",
          "4. Liquidar el Impuesto de Sucesiones en la comunidad autónoma correspondiente (plazo: 6 meses prorrogables).",
          "5. Inscribir los bienes en el Registro de la Propiedad a nombre de los herederos.",
        ],
      },
      {
        heading: "Aspectos fiscales",
        content: [
          "El Impuesto de Sucesiones es un tributo que grava las transmisiones mortis causa. Su regulación varía según la comunidad autónoma, con importantes diferencias en tipos impositivos y bonificaciones.",
          "Existen reducciones aplicables según el grado de parentesco: los descendientes y cónyuge suelen tener las mayores reducciones. Algunas comunidades bonifican hasta el 99% de la cuota.",
          "Es importante presentar la declaración dentro de plazo (6 meses) incluso si se estima que no habrá que pagar nada, para evitar recargos y sanciones.",
          "Además del Impuesto de Sucesiones, puede ser necesario presentar la declaración del IRPF del fallecido y, en su caso, la declaración de plusvalía municipal si se heredan inmuebles urbanos.",
        ],
      },
    ],
    conclusion:
      "El proceso sucesorio puede ser complejo y requiere cumplir con múltiples trámites en plazos determinados. En SILOS te acompañamos en todo el proceso, garantizando el cumplimiento de todas las obligaciones legales y fiscales. Contacta con nuestro equipo para gestionar la herencia de forma eficiente y sin preocupaciones.",
  },
];

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): BlogArticleData | undefined => {
  return blogArticles.find((article) => article.slug === slug);
};

// Helper function to get related articles (excluding current)
export const getRelatedArticles = (
  currentSlug: string,
  category: string,
  limit: number = 3
): Array<{
  url: string;
  image: { src: string; alt?: string };
  category: string;
  readTime: string;
  title: string;
  description: string;
}> => {
  return blogArticles
    .filter(
      (article) => article.slug !== currentSlug && article.category === category
    )
    .slice(0, limit)
    .map((article) => ({
      url: `/blogs/${article.slug}`,
      image: article.image,
      category: article.category,
      readTime: article.readTime,
      title: article.heading,
      description: article.introduction.slice(0, 120) + "...",
    }));
};

// Default button config
export const defaultBlogButton = {
  title: "Todos los artículos",
  variant: "link" as const,
  size: "link" as const,
  iconLeft: <RxChevronLeft />,
};

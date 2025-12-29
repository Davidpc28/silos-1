import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

type BlogPost = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  button: ButtonProps;
};

type Tab = {
  value: string;
  trigger: string;
  content: BlogPost[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tabs: Tab[];
};

export type Blog16Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Blog16 = (props: Blog16Props) => {
  const { tagline, heading, description, tabs } = {
    ...Blog16Defaults,
    ...props,
  };

  return (
    <section
      id="blog"
      className="px-[2.5%] py-16 md:py-24 lg:py-28 container mx-auto"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full text-center">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <Tabs
          defaultValue={tabs[0].value}
          className="flex flex-col justify-center"
        >
          <TabsList className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="px-4 rounded-full data-[state=active]:bg-gradient-to-r from-primary to-primary-light data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
              >
                {tab.trigger}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-1 md:gap-y-16 lg:grid-cols-2">
                {tab.content.map((post, index) => (
                  <div
                    key={index}
                    className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4"
                  >
                    <Link href={post.url} className="w-full">
                      <img
                        src={post.image.src}
                        alt={post.image.alt}
                        className="aspect-square w-full object-cover"
                      />
                    </Link>
                    <div className="flex h-full flex-col items-start justify-center">
                      <div className="rb-4 mb-4 flex w-full items-center justify-start">
                        <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                          {post.category}
                        </p>
                        <p className="inline text-sm font-semibold">
                          {post.readTime}
                        </p>
                      </div>
                      <div className="flex w-full flex-col items-start justify-start">
                        <Link className="mb-2" href={post.url}>
                          <h3 className="text-xl font-bold md:text-2xl">
                            {post.title}
                          </h3>
                        </Link>
                        <p>{post.description}</p>
                        <Button
                          {...post.button}
                          className="mt-6 flex items-center justify-center gap-x-2"
                        >
                          {post.button.title}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const subastasPosts: BlogPost[] = [
  {
    url: "/blogs/guia-completa-subastas-judiciales",
    image: {
      src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80",
      alt: "Guía subastas judiciales",
    },
    category: "Subastas",
    readTime: "8 min lectura",
    title: "Guía completa: Cómo participar en una subasta judicial",
    description:
      "Todo lo que necesitas saber para invertir con seguridad en subastas judiciales e inmobiliarias. Requisitos, proceso y consejos prácticos.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      alt: "Inversión inmobiliaria",
    },
    category: "Subastas",
    readTime: "6 min lectura",
    title: "Inversión inmobiliaria: Oportunidades en subastas",
    description:
      "Descubre cómo identificar las mejores oportunidades de inversión en subastas inmobiliarias y maximizar tu rentabilidad.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      alt: "Errores comunes en subastas",
    },
    category: "Subastas",
    readTime: "5 min lectura",
    title: "Errores comunes al participar en subastas judiciales",
    description:
      "Evita los errores más frecuentes que cometen los participantes novatos en subastas judiciales e inmobiliarias.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
      alt: "Documentación subastas",
    },
    category: "Subastas",
    readTime: "7 min lectura",
    title: "Documentación necesaria para participar en subastas",
    description:
      "Conoce todos los documentos que necesitas preparar antes de participar en una subasta judicial o inmobiliaria.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
];

const familiaPosts: BlogPost[] = [
  {
    url: "/blogs/divorcios-aspectos-legales-clave",
    image: {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80",
      alt: "Derecho de familia",
    },
    category: "Familia",
    readTime: "6 min lectura",
    title: "Divorcios: Aspectos legales clave que debes conocer",
    description:
      "Información esencial sobre procesos de divorcio, custodia y medidas paternofiliales. Guía completa para entender tus derechos.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&q=80",
      alt: "Custodia compartida",
    },
    category: "Familia",
    readTime: "7 min lectura",
    title: "Custodia compartida: Derechos y obligaciones",
    description:
      "Todo lo que necesitas saber sobre la custodia compartida, sus ventajas y cómo establecer un régimen de visitas efectivo.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80",
      alt: "Pensión alimenticia",
    },
    category: "Familia",
    readTime: "5 min lectura",
    title: "Pensión alimenticia: Cálculo y obligaciones",
    description:
      "Comprende cómo se calcula la pensión alimenticia, quién debe pagarla y qué hacer ante impagos.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=1200&q=80",
      alt: "Modificación medidas",
    },
    category: "Familia",
    readTime: "6 min lectura",
    title: "Modificación de medidas paternofiliales",
    description:
      "Cuándo y cómo solicitar la modificación de medidas tras un divorcio o separación. Procedimiento y requisitos.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
];

const civilPosts: BlogPost[] = [
  {
    url: "/blogs/herencias-guia-practica-sucesiones",
    image: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
      alt: "Herencias y sucesiones",
    },
    category: "Civil",
    readTime: "7 min lectura",
    title: "Herencias: Guía práctica sobre sucesiones legales",
    description:
      "Todo sobre herencias, testamentos y la gestión de bienes sucesorios. Procedimientos y plazos a tener en cuenta.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1554224311-beee1b0e2b57?w=1200&q=80",
      alt: "Contratos civiles",
    },
    category: "Civil",
    readTime: "6 min lectura",
    title: "Contratos civiles: Elementos esenciales y validez",
    description:
      "Aprende sobre los elementos fundamentales de un contrato civil y cómo asegurar su validez legal.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
      alt: "Responsabilidad civil",
    },
    category: "Civil",
    readTime: "8 min lectura",
    title: "Responsabilidad civil: Qué es y cuándo se aplica",
    description:
      "Entiende la responsabilidad civil, los daños indemnizables y cómo reclamar una compensación.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
      alt: "Arrendamientos",
    },
    category: "Civil",
    readTime: "5 min lectura",
    title: "Arrendamientos urbanos: Derechos del propietario e inquilino",
    description:
      "Conoce los derechos y obligaciones en contratos de arrendamiento urbano y cómo resolver conflictos.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
];

const penalPosts: BlogPost[] = [
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=80",
      alt: "Derecho penal",
    },
    category: "Penal",
    readTime: "7 min lectura",
    title: "Derechos del detenido: Lo que debes saber",
    description:
      "Conoce tus derechos fundamentales en caso de detención y cómo actuar ante las autoridades.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80",
      alt: "Delitos económicos",
    },
    category: "Penal",
    readTime: "8 min lectura",
    title: "Delitos económicos: Tipos y consecuencias",
    description:
      "Comprende los principales delitos económicos, sus penas y cómo defenderse ante acusaciones.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=1200&q=80",
      alt: "Violencia de género",
    },
    category: "Penal",
    readTime: "6 min lectura",
    title: "Violencia de género: Protección legal y recursos",
    description:
      "Medidas de protección, órdenes de alejamiento y recursos disponibles para víctimas de violencia de género.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=1200&q=80",
      alt: "Antecedentes penales",
    },
    category: "Penal",
    readTime: "5 min lectura",
    title: "Cancelación de antecedentes penales",
    description:
      "Proceso para solicitar la cancelación de antecedentes penales, plazos y requisitos necesarios.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
];

const mercantilPosts: BlogPost[] = [
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
      alt: "Constitución empresas",
    },
    category: "Mercantil",
    readTime: "7 min lectura",
    title: "Cómo constituir una empresa: Guía paso a paso",
    description:
      "Todo lo que necesitas saber para constituir tu empresa, desde elegir la forma jurídica hasta el registro.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1554224311-beee1b0e2b57?w=1200&q=80",
      alt: "Contratos mercantiles",
    },
    category: "Mercantil",
    readTime: "6 min lectura",
    title: "Contratos mercantiles: Tipos y características",
    description:
      "Conoce los principales tipos de contratos mercantiles y sus particularidades legales.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
      alt: "Disolución empresas",
    },
    category: "Mercantil",
    readTime: "8 min lectura",
    title: "Disolución y liquidación de sociedades",
    description:
      "Procedimiento legal para disolver una empresa, causas y pasos a seguir en el proceso de liquidación.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  {
    url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
      alt: "Reclamación deudas",
    },
    category: "Mercantil",
    readTime: "5 min lectura",
    title: "Reclamación de deudas entre empresas",
    description:
      "Procedimientos y herramientas legales para reclamar deudas mercantiles de forma efectiva.",
    button: {
      title: "Leer más",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
];

const allPosts: BlogPost[] = [
  ...subastasPosts,
  ...familiaPosts,
  ...civilPosts,
  ...penalPosts,
  ...mercantilPosts,
];

export const Blog16Defaults: Props = {
  tagline: "Recursos Legales",
  heading: "Artículos",
  description:
    "Información actualizada y práctica sobre diferentes áreas del derecho.",
  tabs: [
    {
      value: "view-all",
      trigger: "Ver todo",
      content: allPosts.slice(0, 8),
    },
    {
      value: "subastas",
      trigger: "Subastas",
      content: subastasPosts,
    },
    {
      value: "familia",
      trigger: "Familia",
      content: familiaPosts,
    },
    {
      value: "civil",
      trigger: "Civil",
      content: civilPosts,
    },
    {
      value: "penal",
      trigger: "Penal",
      content: penalPosts,
    },
    {
      value: "mercantil",
      trigger: "Mercantil",
      content: mercantilPosts,
    },
  ],
};

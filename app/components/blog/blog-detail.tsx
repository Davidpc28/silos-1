import React from "react";
import { Button } from "../ui/Button";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

type PostDetails = {
  title: string;
  description: string;
};

type ContentSection = {
  heading: string;
  content: string[];
};

type RelatedPost = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
};

type Props = {
  // Header
  button: ButtonProps;
  category: string;
  readTime: string;
  heading: string;
  image: ImageProps;
  postDetails: PostDetails[];

  // Content
  introduction: string;
  sections: ContentSection[];
  conclusion: string;

  // Related Posts
  relatedPostsHeading: string;
  relatedPosts: RelatedPost[];
};

export type BlogDetailProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const BlogDetail = (props: BlogDetailProps) => {
  const {
    button,
    category,
    readTime,
    heading,
    image,
    postDetails,
    introduction,
    sections,
    conclusion,
    relatedPostsHeading,
    relatedPosts,
  } = {
    ...BlogDetailDefaults,
    ...props,
  };

  return (
    <>
      {/* Header Section */}
      <section className="px-[2.5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto">
          <div className="grid gap-x-20 gap-y-12 md:grid-cols-[.5fr_1fr]">
            <div className="mx-auto flex size-full max-w-lg flex-col items-start justify-start">
              <div className="rb-12 flex flex-col items-start justify-start">
                <Link href="/blogs" className="mb-6 md:mb-8">
                  <button className="inline-flex items-center text-sm font-semibold hover:text-primary transition-colors">
                    <RxChevronLeft className="mr-1" />
                    {button.title}
                  </button>
                </Link>
                <div className="rb-4 mb-5 flex w-full items-center justify-start md:mb-6">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    {category}
                  </p>
                  <p className="inline text-sm font-semibold">{readTime}</p>
                </div>
                <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                  {heading}
                </h1>
              </div>
              <div className="mt-6 flex size-full flex-col items-start md:mt-8">
                <div className="rb-4 flex items-center sm:mb-8 md:mb-0">
                  {postDetails.map((detail, index) => (
                    <div key={index} className="mr-8 md:mr-10 lg:mr-12">
                      <p className="text-sm">
                        {detail.title} {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mx-auto w-full overflow-hidden">
              <img
                src={image.src}
                className="aspect-3/2 size-full object-cover rounded-lg"
                alt={image.alt}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-[5%] py-8 md:py-12">
        <div className="container max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-8 md:mb-12">
            <p className="text-lg leading-relaxed text-neutral-700">
              {introduction}
            </p>
          </div>

          {/* Content Sections */}
          {sections.map((section, index) => (
            <div key={index} className="mb-8 md:mb-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-base leading-relaxed text-neutral-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Conclusion */}
          {conclusion && (
            <div className="mb-12 rounded-lg bg-background-secondary p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Conclusión
              </h2>
              <p className="text-base leading-relaxed text-neutral-700">
                {conclusion}
              </p>
            </div>
          )}

          {/* CTA Section */}
        </div>
      </section>
      <div className="my-12 border-t border-neutral-200 pt-8 text-center">
        <h3 className="mb-4 text-2xl font-bold md:text-3xl">
          ¿Necesitas asesoramiento legal personalizado?
        </h3>
        <p className="mb-6 text-neutral-700">
          Nuestro equipo de expertos está listo para ayudarte. Agenda una
          consulta gratuita.
        </p>
        <Link href="/#contacto">
          <Button variant="primary" size="lg">
            Agendar Consulta
          </Button>
        </Link>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-background-secondary px-[5%] py-16 md:py-24">
          <div className="container">
            <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
              {relatedPostsHeading}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post, index) => (
                <Link
                  key={index}
                  href={post.url}
                  className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={post.image.src}
                      alt={post.image.alt}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        {post.category}
                      </p>
                      <p className="text-sm font-semibold">{post.readTime}</p>
                    </div>
                    <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mb-4 flex-1 text-neutral-700">
                      {post.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-primary">
                      Leer más <RxChevronRight className="ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export const BlogDetailDefaults: Props = {
  // Header
  button: {
    title: "Todos los artículos",
    variant: "link",
    size: "link",
    iconLeft: <RxChevronLeft />,
  },
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

  // Content
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

  // Related Posts
  relatedPostsHeading: "Artículos relacionados",
  relatedPosts: [
    {
      url: "/blogs/inversion-inmobiliaria",
      image: {
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
        alt: "Inversión inmobiliaria",
      },
      category: "Subastas",
      readTime: "6 min lectura",
      title: "Inversión inmobiliaria: Oportunidades en subastas",
      description:
        "Descubre cómo identificar las mejores oportunidades de inversión en subastas inmobiliarias.",
    },
    {
      url: "/blogs/errores-comunes",
      image: {
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
        alt: "Errores comunes en subastas",
      },
      category: "Subastas",
      readTime: "5 min lectura",
      title: "Errores comunes al participar en subastas judiciales",
      description:
        "Evita los errores más frecuentes que cometen los participantes novatos en subastas.",
    },
    {
      url: "/blogs/documentacion-necesaria",
      image: {
        src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
        alt: "Documentación subastas",
      },
      category: "Subastas",
      readTime: "7 min lectura",
      title: "Documentación necesaria para participar en subastas",
      description:
        "Conoce todos los documentos que necesitas preparar antes de participar en una subasta.",
    },
  ],
};

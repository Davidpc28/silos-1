"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import {
  MotionValue,
  useMotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import React from "react";
import { Button } from "../ui/Button";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  tagline: string;
  heading: string;
  description: string;
  buttons: Array<{
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
  }>;
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSectionProps[];
};

export type Layout409Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const calculateScales = (
  totalSections: number,
  scrollYProgress: MotionValue<number>
) => {
  return Array.from({ length: totalSections }, (_, index) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);

    return index < totalSections - 1
      ? useTransform(scrollYProgress, [start, end], [1, 0.8])
      : useMotionValue(1);
  });
};

export const Layout409 = (props: Layout409Props) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout409Defaults,
    ...props,
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });

  const scales = calculateScales(featureSections.length, scrollYProgress);

  return (
    <section
      id=""
      className="px-[2.5%] py-16 md:py-24 lg:py-28 container mx-auto"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div
          ref={containerRef}
          className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0 bg-white"
        >
          {featureSections.map((featureSection, index) => (
            <FeatureSection
              key={index}
              {...featureSection}
              scale={scales[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({
  scale,
  index,
  ...featureSection
}: FeatureSectionProps & {
  scale: MotionValue<number>;
  index: number;
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isEven = index % 2 === 0;

  return (
    <React.Fragment>
      {isMobile ? (
        <div className="static grid grid-cols-1 content-center overflow-hidden shadow-xl bg-white">
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </div>
      ) : (
        <motion.div
          className="static grid grid-cols-1 content-center overflow-hidden shadow-xl bg-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
          style={{ scale }}
        >
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </motion.div>
      )}
    </React.Fragment>
  );
};

const FeatureSectionContent = ({
  isEven,
  ...featureSection
}: FeatureSectionProps & { isEven: boolean }) => (
  <React.Fragment>
    <div
      className={clsx(
        "order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 bg-white",
        isEven ? "md:order-first" : "md:order-last"
      )}
    >
      <p className="mb-2 font-semibold">{featureSection.tagline}</p>
      <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
        {featureSection.heading}
      </h2>
      <p>{featureSection.description}</p>
      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
        {featureSection.buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div>
    </div>
    <div
      className={clsx(
        "order-last flex flex-col items-center justify-center",
        isEven ? "md:order-last" : "md:order-first"
      )}
    >
      <img src={featureSection.image.src} alt={featureSection.image.alt} />
    </div>
  </React.Fragment>
);

export const Layout409Defaults: Props = {
  tagline: "Especialistas en Subastas",
  heading: "Subastas Judiciales",
  description:
    "Abogados especializados en subastas judiciales. Analizamos cada operación para garantizar seguridad jurídica antes, durante y después de la puja.",
  featureSections: [
    {
      tagline: "Análisis Completo",
      heading: "Estudio del Procedimiento Judicial",
      description:
        "Realizamos un análisis exhaustivo del procedimiento judicial. Examinamos toda la documentación, antecedentes del caso y situación legal del inmueble para que tomes decisiones informadas y seguras en tu inversión.",
      buttons: [
        { title: "Consultar Ahora", variant: "primary" },
        {
          title: "Más Información",
          variant: "white",
        },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
        alt: "Estudio del procedimiento judicial",
      },
    },
    {
      tagline: "Seguridad Jurídica",
      heading: "Análisis Registral y de Cargas",
      description:
        "Verificamos el registro de propiedad, identificamos hipotecas, embargos y otros gravámenes. Nos aseguramos de que conoces exactamente qué estás adquiriendo y eliminamos sorpresas desagradables después de la adjudicación.",
      buttons: [
        { title: "Ver Subastas", variant: "primary" },
        {
          title: "Conocer Más",
          variant: "white",
        },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
        alt: "Análisis registral",
      },
    },
    {
      tagline: "Verificación Posesoria",
      heading: "Situación Posesoria del Inmueble",
      description:
        "Determinamos quién ocupa el inmueble, qué derechos posee y qué trámites necesitaremos después de la adjudicación. Evitamos conflictos y conoces de antemano cualquier ocupante o situación compleja.",
      buttons: [
        { title: "Contactar", variant: "primary" },
        {
          title: "Ver Servicios",
          variant: "white",
        },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
        alt: "Situación posesoria",
      },
    },
    {
      tagline: "Acompañamiento Integral",
      heading: "Asistencia Post-Adjudicación y Desahucios",
      description:
        "Te acompañamos en los trámites tras la adjudicación: escrituración, inscripción registral, recuperación de la posesión y desahucios si es necesario. Tu inversión está completamente protegida desde el inicio hasta la toma de posesión.",
      buttons: [
        { title: "Agendar Cita", variant: "primary" },
        {
          title: "Testimonios",
          variant: "white",
        },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        alt: "Acompañamiento legal post-adjudicación",
      },
    },
  ],
};

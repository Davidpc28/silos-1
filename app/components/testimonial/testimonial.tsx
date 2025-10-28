"use client";

import { useRef } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import {
  MotionStyle,
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "../ui/Button";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  icon: ImageProps;
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: Array<{
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
    iconRight?: React.ReactNode;
  }>;
  featureSections: FeatureSectionProps[];
};

export type Layout416Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout416 = (props: Layout416Props) => {
  const { tagline, heading, description, buttons, featureSections } = {
    ...Layout416Defaults,
    ...props,
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["20% start", "end end"] : ["start start", "end end"],
  });

  return (
    <section id="testimonios" ref={containerRef} className="px-[5%]">
      <div className="container">
        <div className="relative h-[300svh] lg:h-[300vh]">
          <div className="static grid h-full grid-cols-1 content-start items-center gap-x-20 gap-y-16 py-16 md:sticky md:top-0 md:h-[100svh] md:grid-cols-2 md:content-normal md:py-0 lg:h-screen">
            <div>
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md">{description}</p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    {...button}
                    variant={button.variant}
                    size={button.size}
                  >
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
            <div className="sticky top-[25%] flex min-h-[24.5rem] flex-col items-center justify-center md:relative md:top-0 md:min-h-[auto]">
              {featureSections.map((section, index) => (
                <FeatureSection
                  key={index}
                  section={section}
                  index={index}
                  totalSections={featureSections.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

const FeatureSection = ({
  section,
  index,
  totalSections,
  scrollYProgress,
}: {
  section: FeatureSectionProps;
  index: number;
  totalSections: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const sectionScrollStart = index / totalSections;
  const sectionScrollEnd = (index + 1) / totalSections;

  const rotate = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    [0 + index * 3, -30]
  );
  const translateY = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ["0vh", "-100vh"]
  );

  const translateX = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ["0vw", "-10vw"]
  );

  return (
    <motion.div
      className="absolute mx-6 flex flex-col justify-between border border-border-primary bg-white p-8 md:ml-0"
      style={
        {
          rotate: index === totalSections - 1 ? "6deg" : rotate,
          translateY: index === totalSections - 1 ? undefined : translateY,
          translateX: index === totalSections - 1 ? undefined : translateX,
          zIndex: totalSections - index,
        } as MotionStyle
      }
    >
      <div className="rb-6 mb-6 md:mb-8">
        <img
          src={section.icon.src}
          alt={section.icon.alt}
          className="size-12 rounded-full object-cover"
        />
      </div>
      <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
        {section.title}
      </h3>
      <p>{section.description}</p>
    </motion.div>
  );
};

export const Layout416Defaults: Props = {
  tagline: "Testimonios",
  heading: "Lo que dicen nuestros clientes",
  description:
    "La confianza de nuestros clientes es nuestro mayor logro. Descubre cómo SILOS ha ayudado a personas como tú a alcanzar sus objetivos legales e inmobiliarios con éxito.",
  buttons: [
    { title: "Contáctanos", variant: "secondary" },
    {
      title: "Ver Más Casos",
      variant: "primary",
      size: "sm",
      iconRight: <RxChevronRight />,
    },
  ],
  featureSections: [
    {
      icon: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
        alt: "María García",
      },
      title: "María García - Inversora",
      description:
        '"Gracias a SILOS conseguí participar en una subasta judicial y adquirir mi vivienda. El equipo me asesoró en cada paso del proceso con profesionalidad y transparencia. ¡Totalmente recomendable!"',
    },
    {
      icon: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        alt: "Juan Martínez",
      },
      title: "Juan Martínez - Particular",
      description:
        '"El proceso de divorcio fue difícil, pero SILOS me acompañó con cercanía y sensibilidad. Resolvieron mi caso de manera eficiente y siempre con un trato humano excepcional."',
    },
    {
      icon: {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        alt: "Carlos Rodríguez",
      },
      title: "Carlos Rodríguez - Inversor Inmobiliario",
      description:
        '"Como inversor en inmuebles, SILOS se ha convertido en mi despacho de confianza. Su experiencia en subastas y asesoría financiera ha sido clave para mis inversiones exitosas."',
    },
  ],
};

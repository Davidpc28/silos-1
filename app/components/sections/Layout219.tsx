"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Feature = {
  columnText: string;
  verticalText: string;
  horizontalText: string;
  heading: string;
  description: string;
  image: ImageProps;
};

type FeatureWithState = Feature & {
  isActive: boolean;
  setIsActive: () => void;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: Feature[];
};

export type Layout219Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout219 = (props: Layout219Props) => {
  const { tagline, heading, description, features } = {
    ...Layout219Defaults,
    ...props,
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleSetIsActive = (index: number) => {
    setActiveIndex((prevIndex) => {
      if (
        prevIndex === index &&
        features.filter((_, i) => i === prevIndex).length === 1
      ) {
        return prevIndex;
      }
      return prevIndex === index ? null : index;
    });
  };

  return (
    <section id="sobre-nosotros" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full  md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="flex w-full flex-col overflow-hidden shadow-xl lg:h-[90vh] lg:flex-row">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              isActive={activeIndex === index}
              setIsActive={() => handleSetIsActive(index)}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  isActive,
  setIsActive,
  ...feature
}: FeatureWithState) => {
  const isMobile = useMediaQuery("(max-width: 991px)");
  const CardContent = isMobile ? motion.div : "div";
  return (
    <motion.div
      className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-border-primary"
      onClick={setIsActive}
      initial={false}
      animate={{
        width: isMobile ? "100%" : isActive ? "100%" : "5rem",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-border-primary py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
        <p className="absolute left-6 whitespace-nowrap text-xl font-bold md:left-10 md:text-2xl lg:relative lg:left-0">
          {feature.columnText}
        </p>
        <h2 className="hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:text-2xl lg:font-bold">
          {feature.verticalText}
        </h2>
        <p className="text-xl font-bold md:text-2xl lg:hidden">
          {feature.horizontalText}
        </p>
      </div>
      <CardContent
        className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
        initial={false}
        animate={{
          height: isActive ? "auto" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
          <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
            {feature.heading}
          </h3>
          <p className="md:text-md">{feature.description}</p>
          <div className="rt-8 mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
            <img
              src={feature.image.src}
              alt={feature.image.alt}
              className="size-full object-cover"
            />
          </div>
        </div>
      </CardContent>
    </motion.div>
  );
};

export const Layout219Defaults: Props = {
  tagline: "Sobre Nosotros",
  heading: "¿Por qué elegir SILOS?",
  description:
    "Conoce más sobre nuestro despacho legal especializado en subastas.",
  features: [
    {
      columnText: "01",
      verticalText: "¿Quiénes somos?",
      horizontalText: "¿Quiénes somos?",
      heading: "¿Quiénes somos?",
      description:
        "SILOS es un despacho legal especializado en subastas judiciales e inmobiliarias. Nuestro equipo de profesionales cuenta con amplia experiencia en derecho civil, familiar e intermediación inmobiliaria, ofreciendo un servicio integral y cercano a cada cliente.",
      image: {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
        alt: "Despacho SILOS",
      },
    },
    {
      columnText: "02",
      verticalText: "Nuestra Misión",
      horizontalText: "Nuestra Misión",
      heading: "Nuestra Misión",
      description:
        "Brindar asesoría legal de excelencia en subastas judiciales e inmobiliarias, acompañando a nuestros clientes con profesionalidad, transparencia y compromiso. Facilitamos inversiones seguras y soluciones legales efectivas con un trato humano y personalizado.",
      image: {
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        alt: "Misión SILOS",
      },
    },
    {
      columnText: "03",
      verticalText: "Nuestra Experiencia",
      horizontalText: "Nuestra Experiencia",
      heading: "Nuestra Experiencia",
      description:
        "Con años de trayectoria en el sector legal y especialización en subastas, hemos ayudado a decenas de clientes a invertir con seguridad y resolver situaciones legales complejas. Somos reconocidos por nuestro profesionalismo y resultados efectivos.",
      image: {
        src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
        alt: "Experiencia SILOS",
      },
    },
    {
      columnText: "04",
      verticalText: "Nuestros Valores",
      horizontalText: "Nuestros Valores",
      heading: "Nuestros Valores",
      description:
        "Trabajamos con ética, transparencia y compromiso. Nos enfocamos en resultados concretos y mantenemos una comunicación clara con nuestros clientes. La confianza y la excelencia son los pilares de nuestro trabajo diario.",
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
        alt: "Valores SILOS",
      },
    },
  ],
};

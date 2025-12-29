"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Heading = {
  title: string;
  image: ImageProps;
};

type Props = {
  headingsTop: Heading[];
  headingsBottom: Heading[];
};

export type Banner16Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Banner16 = (props: Banner16Props) => {
  const { headingsTop, headingsBottom } = {
    ...Banner16Defaults,
    ...props,
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 991px)");

  const headingTopTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["5%", "0%"] : ["25%", "0%"]
  );
  const headingBottomTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-5%", "0%"] : ["-25%", "0%"]
  );

  const renderHeadings = (
    headings: Heading[],
    translate: MotionValue<string>
  ) => (
    <motion.div
      className="grid auto-cols-max grid-flow-col grid-cols-[max-content] items-center justify-around py-2"
      style={{ x: translate }}
    >
      {headings.map((heading, index) => (
        <Heading key={index} title={heading.title} image={heading.image} />
      ))}
    </motion.div>
  );

  return (
    <section
      id="banner-principal"
      ref={sectionRef}
      className="flex w-screen max-w-full flex-col justify-end overflow-hidden py-8 md:py-12 bg-background-secondary"
    >
      <div className="flex justify-end container mx-auto">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {renderHeadings(headingsTop, headingTopTranslate)}
            </React.Fragment>
          ))}
      </div>
      <div className="flex justify-start container mx-auto">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {renderHeadings(headingsBottom, headingBottomTranslate)}
            </React.Fragment>
          ))}
      </div>
    </section>
  );
};

const Heading = ({ title, image }: Heading) => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center whitespace-nowrap px-4 text-center lg:text-left">
        <h3 className="text-lg font-bold md:text-xl text-text-primary">{title}</h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-square size-full max-h-16 object-cover rounded-lg"
        />
      </div>
    </React.Fragment>
  );
};

export const Banner16Defaults: Props = {
  headingsTop: [
    {
      title: "Subastas Judiciales",
      image: {
        src: "/icons/home.gif",
        alt: "Subastas judiciales",
      },
    },
    {
      title: "Derecho Civil",
      image: {
        src: "/icons/thief.gif",
        alt: "Derecho civil",
      },
    },
    {
      title: "Derecho de Familia",
      image: {
        src: "/icons/order.gif",
        alt: "Derecho de familia",
      },
    },
    {
      title: "Inmobiliaria",
      image: {
        src: "/icons/gavel.gif",
        alt: "Intermediación inmobiliaria",
      },
    },
  ],

  headingsBottom: [
    {
      title: "Asesoría Legal",
      image: {
        src: "/icons/gavel.gif",
        alt: "Asesoría legal",
      },
    },
    {
      title: "Experiencia",
      image: {
        src: "/icons/experience.gif",
        alt: "Experiencia",
      },
    },
    {
      title: "Confianza",
      image: {
        src: "/icons/gavel.gif",
        alt: "Confianza",
      },
    },
    {
      title: "Profesionalidad",
      image: {
        src: "/icons/tie.gif",
        alt: "Profesionalidad",
      },
    },
  ],
};

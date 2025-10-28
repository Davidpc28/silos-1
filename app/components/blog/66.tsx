"use client";

import React from "react";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import { Button as CustomButton } from "../ui/Button";
import { RxChevronRight } from "react-icons/rx";
import { useRouter } from "next/navigation";

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
  button: {
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
    iconRight?: React.ReactNode;
  };
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  blogPosts: BlogPost[];
  button: {
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
  };
};

export type Blog66Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Blog66 = (props: Blog66Props) => {
  const { tagline, heading, description, button, blogPosts } = {
    ...Blog66Defaults,
    ...props,
  };
  const router = useRouter();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="blog"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full ">
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md">{description}</p>
            </div>
          </div>
          <div className="hidden md:flex">
            <CustomButton
              variant={button.variant || "secondary"}
              onClick={() => router.push("/blogs")}
            >
              {button.title}
            </CustomButton>
          </div>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="ml-0">
            {blogPosts.map((post, index) => (
              <CarouselItem
                key={index}
                className="basis-[95%] pl-0 pr-6 sm:basis-[80%] md:basis-[33.33%] md:pr-8"
              >
                <div
                  key={index}
                  className="flex size-full flex-col items-center justify-start"
                >
                  <a
                    href={post.url}
                    className="mb-5 inline-block md:mb-6 relative"
                  >
                    <img
                      src={post.image.src}
                      alt={post.image.alt}
                      className="aspect-[3/2] size-full object-cover"
                    />
                    <div className="absolute rounded-full overflow-hidden  top-2 right-2 rb-4 mb-3 flex w-auto items-center justify-start md:mb-4 bg-[#336a85] ">
                      <p className=" bg-[#336a85] px-2 py-1 text-sm font-semibold text-white">
                        {post.category}
                      </p>
                    </div>
                  </a>

                  <div className="flex w-full flex-col items-start justify-start">
                    <a href={post.url} className="mb-2">
                      <h2 className="text-xl font-bold md:text-2xl">
                        {post.title}
                      </h2>
                    </a>
                    <p>{post.description}</p>
                    <div className="mt-5 flex items-center justify-center gap-2 md:mt-6">
                      <CustomButton variant="primary" size="sm">
                        {post.button.title}
                        {post.button.iconRight && (
                          <span className="ml-2">{post.button.iconRight}</span>
                        )}
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-12 flex justify-end md:hidden">
          <CustomButton variant={button.variant || "secondary"}>
            {button.title}
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export const Blog66Defaults: Props = {
  tagline: "Recursos Legales",
  heading: "Artículos y Guías",
  description: "Información útil sobre subastas, derecho civil, familia y más.",
  button: { title: "Ver Todos", variant: "secondary" },
  blogPosts: [
    {
      url: "#",
      image: {
        src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80",
        alt: "Guía subastas judiciales",
      },
      category: "Subastas",
      readTime: "8 min lectura",
      title: "Guía completa: Cómo participar en una subasta judicial",
      description:
        "Todo lo que necesitas saber para invertir con seguridad en subastas judiciales e inmobiliarias.",
      button: {
        title: "Leer más",
        variant: "primary",
        size: "sm",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      image: {
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80",
        alt: "Derecho de familia",
      },
      category: "Familia",
      readTime: "6 min lectura",
      title: "Divorcios: Aspectos legales clave que debes conocer",
      description:
        "Información esencial sobre procesos de divorcio, custodia y medidas paternofiliales.",
      button: {
        title: "Leer más",
        variant: "primary",
        size: "sm",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      image: {
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        alt: "Herencias y sucesiones",
      },
      category: "Civil",
      readTime: "7 min lectura",
      title: "Herencias: Guía práctica sobre sucesiones legales",
      description:
        "Todo sobre herencias, testamentos y la gestión de bienes sucesorios.",
      button: {
        title: "Leer más",
        variant: "primary",
        size: "sm",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      image: {
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
        alt: "Inversión inmobiliaria",
      },
      category: "Inmobiliaria",
      readTime: "5 min lectura",
      title: "Inversión inmobiliaria: Oportunidades en el mercado",
      description:
        "Claves para identificar y aprovechar las mejores oportunidades de inversión inmobiliaria.",
      button: {
        title: "Leer más",
        variant: "primary",
        size: "sm",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};

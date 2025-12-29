import { Button } from "../ui/Button";
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
  button: {
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
    href?: string;
  };
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: {
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
    href?: string;
  };
  blogPosts: BlogPost[];
};

export type Blog66Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Blog66 = (props: Blog66Props) => {
  const { tagline, heading, description, button, blogPosts } = {
    ...Blog66Defaults,
    ...props,
  };
  return (
    <section
      id="blog"
      className="overflow-hidden px-[2.5%] py-16 md:py-24 lg:py-28 container mx-auto"
    >
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="w-full ">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
          <div className="hidden flex-wrap items-center justify-end md:block">
            <Button {...button} asChild={button.href ? true : false}>
              <Link
                href={button.href || "/"}
                className="w-full flex items-center justify-center"
              >
                {button.title}
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.url}
              className="flex size-full flex-col items-center justify-start shadow-xl"
            >
              <div className="relative w-full overflow-hidden aspect-video">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex items-center">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    {post.category}
                  </p>
                  <p className="inline text-sm font-semibold">
                    {post.readTime}
                  </p>
                </div>

                <div className="flex w-full flex-col items-start justify-start">
                  <h2 className="mb-2 text-xl font-bold md:text-2xl">
                    {post.title}
                  </h2>
                  <p>{post.description}</p>
                  <Button
                    {...post.button}
                    className="mt-6 flex items-center justify-center gap-x-1"
                  >
                    {post.button.title}
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {button.href && (
          <Button
            {...button}
            asChild={true}
            className="mt-12 md:hidden mx-auto w-full"
          >
            <Link
              href={button.href || "/"}
              className="w-full flex items-center justify-center"
            >
              {button.title}
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
};
export const Blog66Defaults: Props = {
  tagline: "Recursos Legales",
  heading: "Artículos y Guías",
  description: "Información útil sobre subastas, derecho civil, familia y más.",
  button: { title: "Ver Todos", variant: "primary", href: "/blogs" },
  blogPosts: [
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
        "Todo lo que necesitas saber para invertir con seguridad en subastas judiciales e inmobiliarias.",
      button: {
        title: "Leer más",
        variant: "primary",
        size: "sm",
      },
    },
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
        "Información esencial sobre procesos de divorcio, custodia y medidas paternofiliales.",
      button: {
        title: "Leer más",
        variant: "primary",
        size: "sm",
      },
    },
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
        "Todo sobre herencias, testamentos y la gestión de bienes sucesorios.",
      button: {
        title: "Leer más",
        variant: "primary",
        size: "sm",
      },
    },
  ],
};

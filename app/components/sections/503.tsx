import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import { Button as CustomButton } from "../ui/Button";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Feature = {
  tagline: string;
  heading: string;
  description: string;
  buttons: Array<{
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
    iconRight?: React.ReactNode;
  }>;
  image: ImageProps;
};

type Tab = {
  value: string;
  trigger: string;
  content: Feature[];
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
  tabs: Tab[];
  defaultTabValue: string;
};

export type Layout503Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout503 = (props: Layout503Props) => {
  const { tagline, heading, description, buttons, tabs, defaultTabValue } = {
    ...Layout503Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto text-center">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <CustomButton
                  key={index}
                  variant={button.variant || "secondary"}
                  size={button.size || "md"}
                >
                  {button.title}
                  {button.iconRight && (
                    <span className="ml-2">{button.iconRight}</span>
                  )}
                </CustomButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = (feature: Feature) => {
  return (
    <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
      <div className="p-6 md:p-8 lg:p-12">
        <p className="mb-3 font-semibold md:mb-4">{feature.tagline}</p>
        <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
          {feature.heading}
        </h2>
        <p>{feature.description}</p>
        <div className="mt-6 flex items-center gap-x-4 md:mt-8">
          {feature.buttons.map((button, index) => (
            <CustomButton
              key={index}
              variant={button.variant || "secondary"}
              size={button.size}
            >
              {button.title}
              {button.iconRight && (
                <span className="ml-2">{button.iconRight}</span>
              )}
            </CustomButton>
          ))}
        </div>
      </div>
      <div className="aspect-square">
        <img
          src={feature.image.src}
          className="w-full object-cover"
          alt={feature.image.alt}
        />
      </div>
    </div>
  );
};

export const Layout503Defaults: Props = {
  tagline: "¿Por qué SILOS?",
  heading: "Tu Despacho Legal de Confianza",
  description:
    "Somos especialistas en subastas judiciales e inmobiliarias con un enfoque integral en todas las áreas del derecho. Experiencia, compromiso y cercanía profesional.",
  buttons: [
    { title: "Consulta Gratuita", variant: "secondary" },
    {
      title: "Conoce Más",
      variant: "primary",
     
      iconRight: <RxChevronRight />,
    },
  ],
  defaultTabValue: "tab-one",
  tabs: [
    {
      value: "tab-one",
      trigger: "Experiencia",
      content: [
        {
          tagline: "Más de 15 años",
          heading: "Líderes en Subastas Judiciales",
          description:
            "Contamos con amplia trayectoria y especialización en subastas judiciales e inmobiliarias. Hemos acompañado a cientos de clientes en inversiones exitosas y seguras. Nuestro conocimiento del sector nos posiciona como referentes en el mercado.",
          buttons: [
            { title: "Ver Casos de Éxito", variant: "secondary" },
            {
              title: "Más Información",
              variant: "primary",
             
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80",
            alt: "Experiencia SILOS",
          },
        },
      ],
    },
    {
      value: "tab-two",
      trigger: "Servicio Integral",
      content: [
        {
          tagline: "360° Legal",
          heading: "Asesoría Legal Completa",
          description:
            "No solo subastas: ofrecemos asesoría en derecho civil, derecho de familia, intermediación inmobiliaria y asesoría financiera. Un despacho completo que resuelve todas tus necesidades legales en un solo lugar con profesionalidad y eficacia.",
          buttons: [
            { title: "Ver Servicios", variant: "secondary" },
            {
              title: "Contactar",
              variant: "primary",
             
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
            alt: "Servicio integral SILOS",
          },
        },
      ],
    },
    {
      value: "tab-three",
      trigger: "Cercanía",
      content: [
        {
          tagline: "Trato Humano",
          heading: "Profesionalidad con Cercanía",
          description:
            "Entendemos que cada caso es único. Por eso ofrecemos un trato personalizado, cercano y humano sin perder el rigor profesional. Te escuchamos, te orientamos y te acompañamos en cada paso con transparencia y dedicación absoluta.",
          buttons: [
            { title: "Agendar Consulta", variant: "secondary" },
            {
              title: "Conocer al Equipo",
              variant: "primary",
             
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
            alt: "Cercanía SILOS",
          },
        },
      ],
    },
  ],
};

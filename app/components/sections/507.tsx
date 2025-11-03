import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
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
  content: Feature;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tabs: Tab[];
  defaultValue: string;
};

export type Layout507Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout507 = (props: Layout507Props) => {
  const { tagline, heading, description, tabs, defaultValue } = {
    ...Layout507Defaults,
    ...props,
  };

  return (
    <section
      id="servicios"
      className="px-[2.5%] py-16 md:py-24 lg:py-28 container mx-auto"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full  text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="relative grid auto-cols-fr grid-cols-1 gap-x-12 shadow-xl lg:gap-x-0 ">
          <Tabs defaultValue={defaultValue}>
            <TabsList className="flex-col md:flex-row overflow-x-scroll no-scrollbar">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className="flex cursor-pointer w-full items-start justify-start gap-4 whitespace-normal border-0 border-b p-6 text-md font-bold leading-[1.4] duration-0 data-[state=active]:bg-background-primary data-[state=active]:text-text-primary md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_#fff]"
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
                <FeatureCard tab={tab} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ tab }: { tab: Tab }) => {
  return (
    <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
      <div>
        <p className="mb-3 font-semibold md:mb-4">{tab.content.tagline}</p>
        <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
          {tab.content.heading}
        </h2>
        <p>{tab.content.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          {tab.content.buttons.map((button, index) => (
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
      <div>
        <img
          src={tab.content.image.src}
          className="w-full object-cover"
          alt={tab.content.image.alt}
        />
      </div>
    </div>
  );
};

export const Layout507Defaults: Props = {
  tagline: "Nuestros Servicios",
  heading: "Soluciones Legales Integrales",
  description:
    "Ofrecemos un servicio completo y personalizado en diferentes áreas del derecho, con especial énfasis en subastas judiciales e inmobiliarias.",
  defaultValue: "tab-1",
  tabs: [
    {
      value: "tab-1",
      trigger: "Subastas Judiciales",
      content: {
        tagline: "Servicio Principal",
        heading: "Especialistas en Subastas Judiciales e Inmobiliarias",
        description:
          "Análisis exhaustivo de subastas, acompañamiento en la participación segura, asesoría legal completa y gestión integral del proceso. Te ayudamos a invertir con confianza y seguridad jurídica en cada paso.",
        buttons: [
          { title: "Consultar Subastas", variant: "secondary" },
          {
            title: "Más Información",
            variant: "primary",

            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80",
          alt: "Subastas judiciales",
        },
      },
    },
    {
      value: "tab-2",
      trigger: "Derecho Civil",
      content: {
        tagline: "Asesoría Legal",
        heading: "Derecho Civil Integral",
        description:
          "Asesoramiento en contratos, reclamaciones, responsabilidad civil y todo tipo de asuntos civiles. Protegemos tus derechos con profesionalidad y experiencia en cada caso.",
        buttons: [
          { title: "Contactar", variant: "secondary" },
          {
            title: "Ver Más",
            variant: "primary",

            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1200&q=80",
          alt: "Derecho civil",
        },
      },
    },
    {
      value: "tab-3",
      trigger: "Derecho de Familia",
      content: {
        tagline: "Con Sensibilidad y Profesionalidad",
        heading: "Derecho de Familia",
        description:
          "Divorcios, medidas paternofiliales, herencias y sucesiones. Te acompañamos en momentos difíciles con un trato cercano, humano y resultados efectivos para tu familia.",
        buttons: [
          { title: "Agendar Consulta", variant: "secondary" },
          {
            title: "Conocer Más",
            variant: "primary",

            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80",
          alt: "Derecho de familia",
        },
      },
    },
    {
      value: "tab-4",
      trigger: "Inmobiliaria",
      content: {
        tagline: "Inversión Segura",
        heading: "Intermediación Inmobiliaria",
        description:
          "Servicios de intermediación inmobiliaria especializados en subastas y operaciones de compra-venta. Te ayudamos a encontrar las mejores oportunidades de inversión con seguridad jurídica.",
        buttons: [
          { title: "Ver Propiedades", variant: "secondary" },
          {
            title: "Más Detalles",
            variant: "primary",

            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
          alt: "Intermediación inmobiliaria",
        },
      },
    },
    {
      value: "tab-5",
      trigger: "Asesoría Financiera",
      content: {
        tagline: "Planificación Inteligente",
        heading: "Asesoría Financiera Personalizada",
        description:
          "Análisis financiero y planificación estratégica para tus inversiones en subastas e inmuebles. Maximiza tus oportunidades con asesoramiento experto y personalizado.",
        buttons: [
          { title: "Solicitar Asesoría", variant: "secondary" },
          {
            title: "Más Información",
            variant: "primary",

            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
          alt: "Asesoría financiera",
        },
      },
    },
    {
      value: "tab-6",
      trigger: "Consulta Gratuita",
      content: {
        tagline: "Primera Consulta Sin Compromiso",
        heading: "Te Escuchamos y Orientamos",
        description:
          "Ofrecemos una primera consulta gratuita para evaluar tu caso. Nuestro equipo analizará tu situación y te ofrecerá las mejores soluciones legales adaptadas a tus necesidades específicas.",
        buttons: [
          { title: "Agendar Ahora", variant: "secondary" },
          {
            title: "Contactar",
            variant: "primary",

            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
          alt: "Consulta gratuita",
        },
      },
    },
  ],
};

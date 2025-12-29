import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { Button as CustomButton } from "../ui/Button";
import CalendlyButton from "../calendly/CalendlyButton";
import WhatsAppButton from "../whatsapp/WhatsAppButton";
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
    isCalendly?: boolean;
    isWhatsApp?: boolean;
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
          {tab.content.buttons.map((button, index) =>
            button.isCalendly ? (
              <CalendlyButton
                key={index}
                variant={button.variant || "primary"}
                size={button.size || "md"}
                text={button.title}
              />
            ) : button.isWhatsApp ? (
              <WhatsAppButton
                key={index}
                variant={button.variant || "secondary"}
                size={button.size || "md"}
                text={button.title}
                message="Hola, me gustaría contactar con vosotros a partir de la web SILOS para obtener más información sobre vuestros servicios."
              />
            ) : (
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
            )
          )}
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
          { title: "Agendar Llamada", variant: "primary", isCalendly: true },
          {
            title: "Contactar WhatsApp",
            variant: "secondary",
            isWhatsApp: true,
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
        tagline: "Reclamaciones y Contratos",
        heading: "Derecho Civil",
        description:
          "Reclamaciones de cantidad • Arrendamientos y desahucios • Responsabilidad civil • Contratos y obligaciones. Protegemos tus derechos con profesionalidad en cada caso.",
        buttons: [
          { title: "Agendar Llamada", variant: "primary", isCalendly: true },
          {
            title: "Contactar WhatsApp",
            variant: "secondary",
            isWhatsApp: true,
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
        tagline: "Divorcios, Custodia y Herencias",
        heading: "Derecho de Familia",
        description:
          "Divorcios y separaciones • Custodia y pensión de alimentos • Modificación de medidas • Procedimientos de filiación. Te acompañamos en momentos difíciles con profesionalidad.",
        buttons: [
          { title: "Agendar Llamada", variant: "primary", isCalendly: true },
          {
            title: "Contactar WhatsApp",
            variant: "secondary",
            isWhatsApp: true,
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
      trigger: "Derecho Penal",
      content: {
        tagline: "Defensa Integral",
        heading: "Derecho Penal",
        description:
          "Defensa penal • Juicios rápidos • Delitos contra el patrimonio • Asistencia al detenido. Protección total de tus derechos con especialistas en procedimiento penal.",
        buttons: [
          { title: "Agendar Llamada", variant: "primary", isCalendly: true },
          {
            title: "Contactar WhatsApp",
            variant: "secondary",
            isWhatsApp: true,
            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
          alt: "Derecho penal",
        },
      },
    },
    {
      value: "tab-5",
      trigger: "Derecho de Extranjería",
      content: {
        tagline: "Inmigración y Residencia",
        heading: "Derecho de Extranjería",
        description:
          "Arraigos • Nacionalidad española • Permisos de residencia y trabajo • Expulsiones y recursos. Asesoramiento especializado en trámites migratorios.",
        buttons: [
          { title: "Agendar Llamada", variant: "primary", isCalendly: true },
          {
            title: "Contactar WhatsApp",
            variant: "secondary",
            isWhatsApp: true,
            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
          alt: "Derecho de extranjería",
        },
      },
    },
    {
      value: "tab-6",
      trigger: "Herencias y Sucesiones",
      content: {
        tagline: "Gestión de Patrimonios",
        heading: "Herencias y Sucesiones",
        description:
          "Testamentos • Declaraciones de herederos • Partición de herencias • Conflictos hereditarios. Resolvemos trámites sucesorios con claridad y transparencia.",
        buttons: [
          { title: "Agendar Llamada", variant: "primary", isCalendly: true },
          {
            title: "Contactar WhatsApp",
            variant: "secondary",
            isWhatsApp: true,
            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
          alt: "Herencias y sucesiones",
        },
      },
    },
    {
      value: "tab-7",
      trigger: "Compraventa de Vehículos",
      content: {
        tagline: "Asesoría Automotriz",
        heading: "Compraventa de Vehículos",
        description:
          "Contratos de compraventa • Vicios ocultos • Reclamaciones por incumplimiento • Asesoramiento legal previo. Protege tu inversión en cada transacción.",
        buttons: [
          { title: "Agendar Llamada", variant: "primary" },
          {
            title: "Más Información",
            variant: "secondary",

            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1200&q=80",
          alt: "Compraventa de vehículos",
        },
      },
    },
    {
      value: "tab-8",
      trigger: "Compraventa de Inmuebles",
      content: {
        tagline: "Transacciones Seguras",
        heading: "Compraventa de Inmuebles",
        description:
          "Contratos privados • Escrituras • Revisión legal previa • Defensa ante conflictos inmobiliarios. Seguridad jurídica total en tu inversión inmobiliaria.",
        buttons: [
          { title: "Agendar Llamada", variant: "primary" },
          {
            title: "Más Información",
            variant: "secondary",

            iconRight: <RxChevronRight />,
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
          alt: "Compraventa de inmuebles",
        },
      },
    },
  ],
};

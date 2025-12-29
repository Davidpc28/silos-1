import { Button } from "../ui/Button";
import CalendlyButton from "../calendly/CalendlyButton";
import WhatsAppButton from "../whatsapp/WhatsAppButton";

type Props = {
  heading: string;
  description: string;
  buttons: Array<{
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
    isCalendly?: boolean;
    isWhatsApp?: boolean;
  }>;
};

export type Cta51Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Cta51 = (props: Cta51Props) => {
  const { heading, description, buttons } = {
    ...Cta51Defaults,
    ...props,
  };
  return (
    <section
      id="cta"
      className="px-[2.5%] py-16 md:py-24 lg:py-28 bg-background container mx-auto"
    >
      <div className="container">
        <div className="flex flex-col items-center shadow-xl p-8 md:p-12 lg:p-16">
          <div className="text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {buttons.map((button, index) =>
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
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Cta51Defaults: Props = {
  heading: "No esperes más, agenda tu visita hoy",
  description:
    "Las mejores oportunidades se agotan rápido. Reserva tu cita ahora con nuestro equipo especializado y descubre cómo maximizar tu inversión. Cupos limitados disponibles.",
  buttons: [
    { title: "Reservar Visita Ahora", variant: "primary", isCalendly: true },
    { title: "Contactar por WhatsApp", variant: "secondary", isWhatsApp: true },
  ],
};

import { Button } from "../ui/Button";

type Props = {
  heading: string;
  description: string;
  buttons: Array<{
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
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
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Cta51Defaults: Props = {
  heading: "¿Listo para tu próxima subasta?",
  description:
    "Te ofrecemos una consulta gratuita para evaluar tus opciones legales. Nuestro equipo de expertos te guiará en cada paso del proceso.",
  buttons: [
    { title: "Consulta Gratuita", variant: "primary" },
    { title: "Llámanos Ahora", variant: "secondary" },
  ],
};

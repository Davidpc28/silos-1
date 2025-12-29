type ImageProps = {
  src: string;
  alt?: string;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button?: {
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
    isCalendly?: boolean;
    isWhatsApp?: boolean;
  };
  teamMembers: TeamMember[];
};

export type Team20Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Team20 = (props: Team20Props) => {
  const { tagline, heading, description, button, teamMembers } = {
    ...Team20Defaults,
    ...props,
  };
  return (
    <section
      id="equipo"
      className="px-[2.5%] py-16 md:py-24 lg:py-28 container mx-auto"
    >
      <div className="container grid grid-cols-1 items-start md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20 gap-8">
        <div className="max-w-lg md:sticky top-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8"></div>
        </div>

        <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <div className="grid auto-cols-fr grid-cols-1 items-start gap-5 sm:grid-cols-[max-content_1fr] sm:gap-x-8 sm:gap-y-4">
      <div>
        <img
          src={member.image.src}
          alt={member.image.alt}
          className="size-20 min-h-20 min-w-20 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="mb-3 md:mb-4">
          <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
          <h6 className="md:text-md">{member.jobTitle}</h6>
        </div>
        <p>{member.description}</p>
      </div>
    </div>
  );
};

export const Team20Defaults: Props = {
  tagline: "Nuestro Equipo",
  heading: "Quienes Somos",
  description:
    "Fundador y socias con amplia trayectoria en subastas judiciales, derecho civil y familiar. Un equipo cercano y profesional dedicado a tu éxito.",
  button: { title: "Agendar Llamada", variant: "primary", isCalendly: true },
  teamMembers: [
    {
      image: {
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
        alt: "Fundador SILOS",
      },
      name: "Nombre del Fundador",
      jobTitle: "Fundador y Socio Director",
      description:
        "Especialista en subastas judiciales con más de 15 años de experiencia. Líder en el sector con un enfoque profesional y resultados probados.",
    },
    {
      image: {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        alt: "Socia 1 SILOS",
      },
      name: "Nombre de Socia 1",
      jobTitle: "Socia - Derecho de Familia",
      description:
        "Experta en derecho de familia y herencias. Reconocida por su trato cercano y efectividad en casos complejos de divorcios y sucesiones.",
    },
    {
      image: {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
        alt: "Socia 2 SILOS",
      },
      name: "Nombre de Socia 2",
      jobTitle: "Socia - Intermediación Inmobiliaria",
      description:
        "Especialista en intermediación inmobiliaria y asesoría financiera. Conocimiento profundo del mercado de subastas y oportunidades de inversión.",
    },
  ],
};

import { Button } from "../ui/Button";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type LinkProps = {
  label: string;
  url: string;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: LinkProps;
  button?: {
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
    iconRight?: React.ReactNode;
  };
};

type Props = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  contacts: Contact[];
};

export type Contact13Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Contact13 = (props: Contact13Props) => {
  const { tagline, heading, description, contacts, image } = {
    ...Contact13Defaults,
    ...props,
  };
  return (
    <section
      id="contacto"
      className="px-[2.5%] py-16 md:py-24 container mx-auto"
    >
      <div className="container">
        <div className="rb-12 mb-12  md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12  sm:grid-cols-2 md:gap-x-20 md:gap-y-16 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            {contacts.map((contact, index) => (
              <div key={index}>
                <div className="mb-3 md:mb-4">
                  {typeof contact.icon === "string" ? (
                    <img
                      src={contact.icon}
                      alt={contact.title}
                      className="size-10"
                    />
                  ) : (
                    <div className="size-10">{contact.icon}</div>
                  )}
                </div>
                <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                  {contact.title}
                </h3>
                <p className="mb-2">{contact.description}</p>
                {contact.title === "Office" && contact.button ? (
                  <div className="mt-5 md:mt-6">
                    <Button variant="primary" size="md">
                      {contact.button.title}
                      {contact.button.iconRight && (
                        <span className="ml-2">{contact.button.iconRight}</span>
                      )}
                    </Button>
                  </div>
                ) : (
                  contact.link && (
                    <a className="underline" href={contact.link.url}>
                      {contact.link.label}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
          <div>
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact13Defaults: Props = {
  tagline: "Contacto",
  heading: "¿Hablamos de tu caso?",
  description:
    "Estamos aquí para ayudarte. Agenda una llamada o envíanos un mensaje para una consulta inicial sin compromiso.",
  contacts: [
    {
      icon: "/icons/mail.svg",
      title: "Email",
      description: "Respuesta en menos de 24 horas.",
      link: {
        label: "info@silosabogados.com",
        url: "mailto:info@silosabogados.com",
      },
    },
    {
      icon: "/icons/phone.svg",
      title: "Teléfono",
      description: "Lunes a viernes, 9:00 - 18:00h.",
      link: {
        label: "+34 900 000 000",
        url: "tel:+34900000000",
      },
    },
    {
      icon: "/icons/location.svg",
      title: "Oficina",
      description: "Calle Ejemplo 123, 28001 Madrid, España",
      button: {
        title: "Agendar Llamada",
        variant: "primary",
        iconRight: <RxChevronRight />,
      },
    },
  ],
  image: {
    src: "https://static0.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg",
    alt: "Oficina SILOS",
  },
};

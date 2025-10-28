"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import type { ButtonProps } from "../ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";

type ImageProps = {
  src: string;
  alt?: string;
};

type TabContent = {
  value: string;
  heading: string;
  description: string;
  buttons: Array<{
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
  }>;
  image: ImageProps;
};

type TabTrigger = {
  value: string;
  text: string;
};

type Tab = {
  trigger: TabTrigger[];
  content: TabContent[];
};

type Props = {
  defaultTabValue: string;
  tabs: Tab;
};

export type Header103Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header103 = (props: Header103Props) => {
  const { defaultTabValue, tabs } = {
    ...Header103Defaults,
    ...props,
  };

  const [activeTab, setActiveTab] = useState(defaultTabValue);

  return (
    <section id="inicio" className="relative min-h-screen">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <AnimatePresence initial={false}>
          {tabs.content.map(
            (content, index) =>
              content.value === activeTab && (
                <TabsContent
                  key={index}
                  value={content.value}
                  className="relative max-h-[60rem] min-h-screen overflow-visible"
                >
                  <TabContent {...content} />
                </TabsContent>
              )
          )}
        </AnimatePresence>
        <TabsList className="absolute bottom-12 left-0 right-0 top-auto z-20 mx-auto flex justify-center gap-4 px-[5vw] md:bottom-16 lg:bottom-20 lg:max-w-xl">
          {tabs.trigger.map((trigger, index) => (
            <TabsTrigger
              key={index}
              value={trigger.value}
              onClick={() => setActiveTab(trigger.value)}
              className="relative flex-1 whitespace-normal border-0 bg-transparent px-4 py-4 text-center text-neutral-light duration-0 data-[state=active]:bg-transparent data-[state=active]:text-neutral-white sm:px-8 md:min-w-32"
            >
              <span className="text-white">{trigger.text}</span>
              <div className="absolute inset-0 top-auto h-1 w-full bg-white/20">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeTab === trigger.value ? "100%" : "0%",
                  }}
                  transition={{
                    duration: activeTab === trigger.value ? 1.5 : 0.3,
                    ...(activeTab === trigger.value
                      ? {
                          type: "spring",
                          stiffness: 25,
                          damping: 30,
                        }
                      : { ease: "easeInOut" }),
                  }}
                />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
};

const TabContent = ({ ...content }: TabContent) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <motion.div
          className="relative z-10 mx-auto text-center text-white"
          initial={{ y: "20%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-20%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
            {content.heading}
          </h1>
          <p className="text-text-alternative md:text-md">
            {content.description}
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            {content.buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#336a85] via-[#336a85]/60 to-transparent" />
        <img
          className="size-full object-cover"
          src={content.image.src}
          alt={content.image.alt}
        />
      </div>
    </div>
  );
};

export const Header103Defaults: Props = {
  defaultTabValue: "tab-one",
  tabs: {
    trigger: [
      {
        value: "tab-one",
        text: "Inicio",
      },
      {
        value: "tab-two",
        text: "Subastas",
      },
      {
        value: "tab-three",
        text: "Servicios",
      },
      {
        value: "tab-four",
        text: "Nosotros",
      },
    ],
    content: [
      {
        value: "tab-one",
        heading: "Tu oportunidad legal en cada subasta",
        description:
          "En SILOS somos expertos en subastas judiciales e inmobiliarias. Te acompañamos en todo el proceso con experiencia, compromiso y cercanía profesional.",
        buttons: [
          {
            title: "Consulta Gratuita",
            variant: "primary",
          },
          {
            title: "Conoce Más",
            variant: "glass",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
          alt: "Despacho SILOS - Expertos en subastas",
        },
      },
      {
        value: "tab-two",
        heading: "Especialistas en Subastas Judiciales",
        description:
          "Análisis completo de subastas, participación segura y asesoría legal integral. Tu inversión en buenas manos con un equipo experto que te guía en cada paso.",
        buttons: [
          {
            title: "Nuestras Subastas",
            variant: "primary",
          },
          {
            title: "Contactar",
            variant: "glass",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
          alt: "Subastas judiciales e inmobiliarias",
        },
      },
      {
        value: "tab-three",
        heading: "Asesoría Legal Integral",
        description:
          "Derecho Civil, Derecho de Familia, intermediación inmobiliaria y asesoría financiera. Soluciones legales completas para todas tus necesidades.",
        buttons: [
          {
            title: "Ver Servicios",
            variant: "primary",
          },
          {
            title: "Agendar Cita",
            variant: "glass",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80",
          alt: "Servicios legales SILOS",
        },
      },
      {
        value: "tab-four",
        heading: "Confianza y Experiencia Profesional",
        description:
          "Un equipo comprometido con tus intereses. Fundador y socias con amplia trayectoria ofreciendo soluciones legales accesibles y efectivas.",
        buttons: [
          {
            title: "Conoce al Equipo",
            variant: "primary",
          },
          {
            title: "Contáctanos",
            variant: "glass",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80",
          alt: "Equipo SILOS",
        },
      },
    ],
  },
};

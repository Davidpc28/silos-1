"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import CalendlyButton from "../calendly/CalendlyButton";
import WhatsAppButton from "../whatsapp/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
    href?: string;
    isCalendly?: boolean;
    isWhatsApp?: boolean;
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
  useEffect(() => {
    setActiveTab(defaultTabValue);
  }, [defaultTabValue]);

  return (
    <section id="inicio" className="relative min-h-screen h-auto">
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
        <TabsList className="absolute top-4 left-[2.5%] right-[2.5%]  z-20 mx-auto flex justify-center gap-4 lg:max-w-xs">
          {tabs.trigger.map((trigger, index) => {
            // Implementa un "progreso" por trigger y cuando llegue a 100% salta a siguiente tab
            // Para el ejemplo, simulamos el progreso con un temporizador
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [progress, setProgress] = useState(0);

            // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
              let timer: NodeJS.Timeout;
              // Detectar si el popup de Calendly está abierto
              const isCalendlyOpen = () => {
                const calendlyPopup =
                  document.querySelector(
                    '[data-testid="calendly-container"]'
                  ) ||
                  document.querySelector(".calendly-popup") ||
                  document.querySelector('[role="dialog"]');
                return calendlyPopup !== null;
              };

              if (activeTab === trigger.value && !isCalendlyOpen()) {
                setProgress(0);
                timer = setInterval(() => {
                  setProgress((prev) => {
                    // Verificar nuevamente si el popup se abrió durante el intervalo
                    if (isCalendlyOpen()) {
                      setProgress(0);
                      return 0;
                    }

                    if (prev >= 100) {
                      clearInterval(timer);
                      const nextIndex = (index + 1) % tabs.trigger.length;
                      setActiveTab(tabs.trigger[nextIndex].value);
                      return 0;
                    }
                    return prev + 1;
                  });
                }, 40);
              }
              return () => clearInterval(timer);
            }, [activeTab, trigger.value, index, tabs.trigger, setActiveTab]);

            return (
              <TabsTrigger
                key={index}
                value={trigger.value}
                onClick={() => setActiveTab(trigger.value)}
                className="relative flex-1 whitespace-normal border-0 bg-transparent px-4 py-4 text-center text-neutral-light duration-0 data-[state=active]:bg-transparent data-[state=active]:text-neutral-white sm:px-8 md:min-w-32"
              >
                <div className="absolute inset-0 bottom-auto h-1 w-full bg-white/20 z-10 rounded-full">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width:
                        activeTab === trigger.value ? `${progress}%` : "0%",
                    }}
                    transition={{
                      duration: 0.1,
                      ease: "linear",
                    }}
                  />
                </div>
                <span className="text-white hidden md:block">
                  {trigger.text}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </section>
  );
};

const TabContent = ({ ...content }: TabContent) => {
  const router = useRouter();
  const handleNavClick = (href?: string) => {
    if (href && href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="px-[2.5%] py-16 md:py-24 lg:py-28 container">
        <motion.div
          className="relative z-10 mx-auto text-center text-white"
          initial={{ y: "20%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-20%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="mb-5 text-4xl font-bold text-text-alternative md:mb-6 lg:text-6xl">
            {content.heading}
          </h1>
          <p className="text-text-alternative md:text-md">
            {content.description}
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8 flex-col md:flex-row gap-6 ">
            {content.buttons.map((button, index) =>
              button.isCalendly ? (
                <CalendlyButton
                  key={index}
                  variant={button.variant || "primary"}
                  size="lg"
                  text={button.title}
                />
              ) : button.isWhatsApp ? (
                <WhatsAppButton
                  key={index}
                  variant={button.variant || "secondary"}
                  size="lg"
                  text={button.title}
                  message="Hola, me gustaría contactar con vosotros a partir de la web SILOS para obtener más información sobre vuestros servicios."
                />
              ) : (
                <Button
                  key={index}
                  variant={button.variant}
                  size="lg"
                  onClick={() => handleNavClick(button.href)}
                >
                  {button.title}
                </Button>
              )
            )}
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
            title: "Agendar Llamada",
            variant: "primary",
            isCalendly: true,
          },
          {
            title: "Conoce Más",
            variant: "glass",
            href: "#sobre-nosotros",
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
            title: "Saber Más",
            variant: "primary",
            href: "/subastas",
          },
          {
            title: "Agendar Llamada",
            variant: "glass",
            isCalendly: true,
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
            href: "#servicios",
          },
          {
            title: "Agendar Llamada",
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
            href: "#equipo",
          },
          {
            title: "Agendar Llamada",
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

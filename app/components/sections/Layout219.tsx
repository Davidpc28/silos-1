import {
  Dialog,
  DialogContent,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type VideoProps = {
  image: ImageProps;
  url: string;
};

type TabProps = {
  value: string;
  heading: string;
  description: string;
  image?: ImageProps;
  video?: VideoProps;
};

type Props = {
  defaultTabValue: string;
  tabs: TabProps[];
};

export type Layout219Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout219 = (props: Layout219Props) => {
  const { tabs, defaultTabValue } = {
    ...Layout219Defaults,
    ...props,
  };

  return (
    <section id="sobre-nosotros" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <Tabs
          defaultValue={defaultTabValue}
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          <div className="max-size-full order-last flex items-center justify-center overflow-hidden md:order-first">
            {tabs.map((tab, index) => {
              return (
                <TabsContent
                  key={index}
                  value={tab.value}
                  className="data-[state=active]:animate-tabs"
                >
                  {tab.image && (
                    <img
                      src={tab.image.src}
                      alt={tab.image.alt}
                      className="size-full object-cover"
                    />
                  )}
                  {tab.video && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="relative flex w-full items-center justify-center">
                          <img
                            src={tab.video.image.src}
                            alt={tab.video.image.alt}
                            className="size-full object-cover"
                          />
                          <FaCirclePlay className="absolute z-20 size-16 text-white" />
                          <span className="absolute inset-0 z-10 bg-black/50" />
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        {tab.image && (
                          <img
                            src={tab.image.src}
                            alt={tab.image.alt}
                            className="size-full"
                          />
                        )}
                        {tab.video && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="relative flex w-full items-center justify-center">
                                <img
                                  src={tab.video.image.src}
                                  alt={tab.video.image.alt}
                                  className="size-full object-cover"
                                />
                                <span className="absolute inset-0 z-10 bg-black/50" />
                                <FaCirclePlay className="absolute z-20 size-16 text-white" />
                              </button>
                            </DialogTrigger>

                            <DialogContent>
                              <VideoIframe video={tab.video.url} />
                            </DialogContent>
                          </Dialog>
                        )}
                      </DialogContent>
                    </Dialog>
                  )}
                </TabsContent>
              );
            })}
          </div>
          <TabsList className="order-first flex-col gap-8 py-8 md:order-last md:py-0">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-0 pl-8 pr-0 text-left data-[state=active]:border-l-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {tab.heading}
                </h3>
                <p>{tab.description}</p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};

export const Layout219Defaults: Props = {
  defaultTabValue: "tab-one",
  tabs: [
    {
      value: "tab-one",
      heading: "¿Quiénes somos?",
      description:
        "SILOS es un despacho legal especializado en subastas judiciales e inmobiliarias. Nuestro equipo de profesionales cuenta con amplia experiencia en derecho civil, familiar e intermediación inmobiliaria, ofreciendo un servicio integral y cercano a cada cliente.",
      image: {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
        alt: "Despacho SILOS",
      },
    },
    {
      value: "tab-two",
      heading: "Nuestra Misión",
      description:
        "Brindar asesoría legal de excelencia en subastas judiciales e inmobiliarias, acompañando a nuestros clientes con profesionalidad, transparencia y compromiso. Facilitamos inversiones seguras y soluciones legales efectivas con un trato humano y personalizado.",
      video: {
        image: {
          src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
          alt: "Video presentación SILOS",
        },
        url: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
      },
    },
    {
      value: "tab-three",
      heading: "Nuestra Experiencia",
      description:
        "Con años de trayectoria en el sector legal y especialización en subastas, hemos ayudado a decenas de clientes a invertir con seguridad y resolver situaciones legales complejas. Somos reconocidos por nuestro profesionalismo y resultados efectivos.",
      image: {
        src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
        alt: "Experiencia SILOS",
      },
    },
  ],
};

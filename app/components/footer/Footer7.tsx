type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  columnLinks: ColumnLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type Footer7Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer7 = (props: Footer7Props) => {
  const { footerText, footerLinks } = {
    ...Footer7Defaults,
    ...props,
  };
  return (
    <footer id="footer" className="mx-auto pb-4 container px-[2.5%]">
      <div className="flex flex-col items-center">
        {/* <a href={logo.url} className="mb-8">
            <img src={logo.src} alt={logo.alt} className="inline-block size-44" />
          </a> */}
        {/* {columnLinks.map((column, index) => (
            <ul
              key={index}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="font-semibold">
                  <a
                    href={link.url}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          ))} */}
      </div>
      <div className="h-px w-full bg-gray-200" />
      <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8">
        <p className="mt-8 md:mt-0 text-gray-600">{footerText}</p>
        <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
          {footerLinks.map((link, index) => (
            <li
              key={index}
              className="underline decoration-gray-400 underline-offset-1"
            >
              <a
                href={link.url}
                className="hover:text-[#336a85] transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export const Footer7Defaults: Props = {
  logo: {
    url: "/",
    src: "/logo.png",
    alt: "SILOS Logo",
  },
  columnLinks: [
    {
      links: [
        { title: "Inicio", url: "/" },
        { title: "Blogs", url: "/blogs" },
        { title: "Subastas", url: "/subastas" },
      ],
    },
  ],
  footerText: "© 2026 SILOS. Todos los derechos reservados.",
  footerLinks: [
    { title: "Privacidad", url: "/privacy" },
    { title: "Términos", url: "/terms" },
    { title: "Cookies", url: "/cookies" },
  ],
};

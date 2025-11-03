"use client";

import { Button } from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type SocialMediaLink = {
  url: string;
  icon: React.ReactNode;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type NavBottom = {
  button: {
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
    url?: string;
  };
  socialMediaLinks: SocialMediaLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  button: {
    title: string;
    variant?: "primary" | "secondary" | "white" | "glass";
    size?: "sm" | "md" | "lg";
  };
  navBottom: NavBottom;
};

export type Navbar18Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Navbar18 = (props: Navbar18Props) => {
  const { logo, navLinks, button, navBottom } = {
    ...Navbar18Defaults,
    ...props,
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    if (url.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(url);
      if (element) {
        setIsMenuOpen(false);
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  };

  return (
    <section
      id="navbar"
      className="sticky top-0 z-[999] bg-white flex min-h-16 w-full items-center px-[2.5%] md:h-[4rem]"
    >
      <div className="mx-auto flex size-full items-center justify-between container">
        <a
          href={logo.url}
          onClick={(e) => handleNavClick(e, logo.url || "#inicio")}
        >
          <img src={logo.src} alt={logo.alt} className="w-32 h-auto" />
        </a>
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <div className="hidden md:block">
            <Button variant="primary" size="md">
              {button.title}
            </Button>
          </div>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:mr-0"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="relative flex size-6 flex-col items-center justify-center">
              <motion.span
                className="absolute top-[3px] h-0.5 w-full bg-black"
                animate={isMenuOpen ? "open" : "close"}
                variants={topLineVariants}
              />
              <motion.span
                className="absolute h-0.5 w-full bg-black"
                animate={isMenuOpen ? "open" : "close"}
                variants={middleLineVariants}
              />
              <motion.span
                className="absolute h-0.5 w-full bg-black"
                animate={isMenuOpen ? "openSecond" : "closeSecond"}
                variants={middleLineVariants}
              />
              <motion.span
                className="absolute bottom-[3px] h-0.5 w-full bg-black"
                animate={isMenuOpen ? "open" : "close"}
                variants={bottomLineVariants}
              />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <Menu
            isMenuOpen={isMenuOpen}
            navLinks={navLinks}
            navBottom={navBottom}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const Menu = ({
  navLinks,
  navBottom,
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  navBottom: NavBottom;
  navLinks: NavLink[];
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    if (url.startsWith("#")) {
      e.preventDefault();
      if (window.location.pathname !== "/") {
        // Redirige a la home y agrega el fragmento
        window.location.href = `/${url}`;
        setIsMenuOpen(false);
      } else {
        const element = document.querySelector(url);
        if (element) {
          setIsMenuOpen(false);
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300);
        }
      }
    }
  };
  return (
    <div className="fixed top-[4rem] bottom-0 left-0 bg-white h-[calc(100vh-4rem)] inset-x-0 w-full overflow-hidden">
      <motion.div
        variants={{
          open: { opacity: 1 },
          close: { opacity: 0 },
        }}
        animate={isMenuOpen ? "open" : "close"}
        initial="close"
        exit="close"
        transition={{ duration: 0.2 }}
        className="flex h-full flex-col overflow-auto bg-background-primary px-[2.5%] pt-0.5 container mx-auto"
      >
        <div className="my-auto grid grid-cols-1 gap-x-10 gap-y-4 py-4 sm:grid-cols-2 md:py-0">
          {navLinks.map((navLink, index) => (
            <a
              key={index}
              href={navLink.url}
              onClick={(e) => handleNavClick(e, navLink.url)}
              title="Click to go to the link"
              className="py-2 text-2xl font-bold leading-[1.2] md:text-5xl lg:text-6xl hover:text-[#336a85] transition-colors"
            >
              {navLink.title}
            </a>
          ))}
        </div>
        <div className="flex min-h-18 items-center justify-between gap-x-4">
          <a
            href={navBottom.button.url}
            onClick={(e) => handleNavClick(e, navBottom.button.url || "#")}
            className="text-md underline md:text-xl hover:text-[#336a85] transition-colors"
          >
            {navBottom.button.title}
          </a>
          <div className="flex items-center gap-3">
            {navBottom.socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Navbar18Defaults: Props = {
  logo: {
    url: "/",
    src: "/logo.png",
    alt: "SILOS - Despacho Legal",
  },
  navLinks: [
    {
      url: "#inicio",
      title: "Inicio",
    },
    {
      url: "#sobre-nosotros",
      title: "Nosotros",
    },
    {
      url: "#servicios",
      title: "Soluciones",
    },
    {
      url: "#blog",
      title: "Blog",
    },
    {
      url: "#testimonios",
      title: "Testimonios",
    },
    {
      url: "#contacto",
      title: "Contacto",
    },
  ],
  navBottom: {
    button: { title: "Contacto", url: "#contacto" },
    socialMediaLinks: [
      { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
      { url: "#", icon: <BiLogoInstagram className="size-6" /> },
      { url: "#", icon: <FaXTwitter className="size-6" /> },
      { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { url: "#", icon: <BiLogoYoutube className="size-6" /> },
    ],
  },
  button: {
    title: "Consulta Gratuita",
    variant: "primary",
    size: "sm",
  },
};

const topLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1, ease: "easeIn" },
  },
  close: {
    width: "100%",
    transition: { duration: 0.1, delay: 0.3, ease: "linear" },
  },
};

const middleLineVariants = {
  open: {
    rotate: 135,
    transition: { duration: 0.3, delay: 0.1, ease: "easeInOut" },
  },
  close: {
    rotate: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  openSecond: {
    rotate: 45,
    transition: { duration: 0.3, delay: 0.1, ease: "easeInOut" },
  },
  closeSecond: {
    rotate: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const bottomLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1, ease: "easeIn" },
  },
  close: {
    width: "100%",
    transition: { duration: 0.1, delay: 0.3, ease: "linear" },
  },
};

import Image from "next/image";
import { Navbar18 } from "./components/navbar/navbar";
import { Header103, Header103Defaults } from "./components/header/header";
import { Cta51, Cta51Defaults } from "./components/cta/cta";
import { Layout219, Layout219Defaults } from "./components/sections/Layout219";
import { Layout507, Layout507Defaults } from "./components/sections/507";
import { Team20, Team20Defaults } from "./components/blog/blog";
import { Layout503, Layout503Defaults } from "./components/sections/503";
import { Banner16, Banner16Defaults } from "./components/banner/banner";
import {
  Layout416,
  Layout416Defaults,
} from "./components/testimonial/testimonial";

import { Contact13, Contact13Defaults } from "./components/footer/footer";
import { Layout409, Layout409Defaults } from "./components/blog/409";
import { Blog66, Blog66Defaults } from "./components/blog/66";

export default function Home() {
  return (
    <div className="flex flex-col  bg-white">
      <Navbar18 />
      <Header103 {...Header103Defaults} />
      <Cta51 {...Cta51Defaults} />
      <Layout219 {...Layout219Defaults} />
      <Layout507 {...Layout507Defaults} />
      <Team20 {...Team20Defaults} />
      <Layout503 {...Layout503Defaults} />
      <Banner16 {...Banner16Defaults} />
      <Layout416 {...Layout416Defaults} />
      <Layout409 {...Layout409Defaults} />
      <Blog66 {...Blog66Defaults} />
      <Contact13 {...Contact13Defaults} />
    </div>
  );
}

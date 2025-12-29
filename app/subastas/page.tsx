import { Layout409, Layout409Defaults } from "../components/blog/409";
import { Contact13, Contact13Defaults } from "../components/footer/footer";
import { Navbar18 } from "../components/navbar/navbar";
import { Footer7, Footer7Defaults } from "../components/footer/Footer7";

export default function Home() {
  return (
    <div className="flex flex-col  bg-white">
      <Navbar18 />
      <Layout409 {...Layout409Defaults} />
      <Contact13 {...Contact13Defaults} />
      <Footer7 {...Footer7Defaults} />
    </div>
  );
}

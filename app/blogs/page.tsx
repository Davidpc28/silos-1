import { Blog16, Blog16Defaults } from "../components/blog-list/blog-list";
import { Navbar18 } from "../components/navbar/navbar";

export default function Home() {
  return (
    <div className="flex flex-col  bg-white">
      <Navbar18 />
      <Blog16 {...Blog16Defaults} />
    </div>
  );
}

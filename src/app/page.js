import Image from "next/image";
import Headers from "./component/Headers";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";


export default function Home() {
  return (
    <>
    <Headers/>
    <main className="flex min-h-screen flex-col py-4">
      <About/>
      <Project/>
      <Contact/>
    </main>
    </>
      


  );
}

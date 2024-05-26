import Description from "./components/Description/page";
import Nav from "./components/Nav/page";
import Projects from "./components/Projects/page";
import { Header } from "./components/header/header";

export default function Home() {
  return (
    <>
      <section>
        <Nav />
        <Description />
        <Projects />
      </section>
    </>
  );
}

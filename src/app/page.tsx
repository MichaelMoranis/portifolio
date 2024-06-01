import Description from "./components/Description/page";
import Projects from "./components/Projects/page";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center w-full gap-6">
        <Description />
        <Projects html_url="#" />
      </section>
    </>
  );
}

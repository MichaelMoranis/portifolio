import Description from "./components/Description/page";
import Outdoor from "./components/Outdoor";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-6 w-full rounded-md bg-zinc-800">
      <section className="flex bg-zinc-700 flex-col items-center w-full">
        <Description />
      </section>
      <Projects html_url="#" />
      <Outdoor />
    </div>
  );
}

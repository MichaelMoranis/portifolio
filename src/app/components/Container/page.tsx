import Description from "../Description/page";
import Nav from "../Nav/page";
import Projects from "../Projects/page";


export default function Container() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4  bg-zinc-900 my-4 mx-2 w-full md:w-4/6 xl:max-w-screen-sm  rounded-xl gap-8">
      <Nav />
      <Description />
      <Projects />
    </main>
  );
}

import Description from "../Description/page";
import Nav from "../Nav/page";

export default function Container() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-zinc-900 my-4 mx-2 w-full md:w-4/6 xl:max-w-screen-sm  rounded-xl">
      <Nav />
      <Description />
    </main>
  );
}

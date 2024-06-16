import { BsPersonCircle } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { HiPlusCircle } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { SiOnlyoffice } from "react-icons/si";
import { TiWeatherSunny } from "react-icons/ti";

export function Header() {
  return (
    <section className="flex items-center border-s-zinc-600 w-full rounded-xl md:w-4/6 xl:max-w-screen-sm">
      <div className="flex items-center justify-between flex-row  h-18 px-1  w-full  bg-zinc-900 rounded-xl">
        <div>
          <nav className="flex">
            <ul className="flex items-center justify-between gap-6 p-4">
              <li className="hover:bg-indigo-500 p-2 rounded-md border-s-indigo-600">
                <a href="/">
                  <IoHome className="text-2xl" />
                </a>
              </li>
              <li className="hover:bg-indigo-500 p-2 rounded-md border-s-indigo-600">
                <a href="./components/Profile">
                  <BsPersonCircle className="text-2xl"  />
                </a>
              </li>
              <li className="hover:bg-indigo-500 p-2 rounded-md border-s-indigo-600">
                <a href="#">
                  <GrWorkshop  className="text-2xl"  />
                </a>
              </li>
              <li className="hover:bg-indigo-500 p-2 rounded-md border-s-indigo-600">
                <a href="/components/Works">
                  <SiOnlyoffice  className="text-2xl"  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row items-center bg-zinc-800 hover:bg-zinc-600 rounded-md p-2 gap-2">
          <div>
            <TiWeatherSunny  className="text-2xl"  />
          </div>
          <button className="hidden md:flex items-center gap-2 bg-zinc-700 hover:bg-indigo-500 rounded-md px-2 py-1">
            <HiPlusCircle />
              contato
          </button>
        </div>
      </div>
    </section>
  );
}

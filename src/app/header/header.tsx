import { BsPersonCircle, BsPlusCircleDotted } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { SiOnlyoffice } from "react-icons/si";
import { TiWeatherSunny } from "react-icons/ti";

export function Header() {
  return (
    <main className="flex items-center justify-center border-s-zinc-600 w-full">
      <section className="flex items-center justify-around flex-row  h-12 px-4 gap-28 w-96 mx-4 bg-zinc-800 rounded-xl">
        <div>
          <nav>
            <ul className="flex items-center justify-center gap-4">
              <li>
                <a href="#">
                  <IoHome />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsPersonCircle />
                </a>
              </li>
              <li>
                <a href="#">
                  <GrWorkshop />
                </a>
              </li>
              <li>
                <a href="#">
                  <SiOnlyoffice />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div>
            <TiWeatherSunny />
          </div>
          <button className="flex flex-row gap-2 p-1 justify-center items-center bg-zinc-700 rounded-md">
              hire me
          </button>
        </div>
      </section>
    </main>
  );
}

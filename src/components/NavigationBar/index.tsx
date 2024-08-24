import { useState } from "react";
import burguerMenu from "../../assets/hambuger.png";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  function openNavigation() {
    setIsOpen(!isOpen);
    console.log("fui clicado");
  }

  return (
    <nav className="max-h-screen z-50">
      <button onClick={() => openNavigation()}>
        <img
          src={burguerMenu}
          className="h-8 w-8 md:w-12 md:h-12  rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-2 text-white text-xl bg-zinc-700 font-bold font-regular w-44 sm:w-60 p-4 flex flex-col items-end justify-center rounded-md z-50">
          <ul className="space-y-4">
            <li>
              <Link className="hover:underline hover:bg-zinc-600 hover:text-zinc-300 rounded-full p-1" to="/works">Projetos</Link>
            </li>
            <li>
            <Link className="hover:underline hover:bg-zinc-600 hover:text-zinc-300 rounded-full p-1" to="/images">images</Link>
            </li>
            <li>
            <Link className="hover:underline hover:bg-zinc-600 hover:text-zinc-300 rounded-full p-1" to="/setup">Itens Pc</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;


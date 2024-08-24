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
    <nav className="max-h-96 z-50">
      <button onClick={() => openNavigation()}>
        <img
          src={burguerMenu}
          className="h-8 w-8 md:w-12 md:h-12  rounded-full"
        />
      </button>
      {isOpen && (
          <ul className=" absolute h-48 right-2 text-white text-xl bg-purple-900 font-bold font-regular w-44 sm:w-60  flex flex-col justify-between items-end rounded-md z-50">
            <li className="hover:underline hover:bg-zinc-600 hover:text-zinc-300 rounded-full p-2 m-2">
              <Link to="/works">Projetos</Link>
            </li>
            <li className="hover:underline hover:bg-zinc-600 hover:text-zinc-300 rounded-full p-2 m-2">
            <Link to="/images">images</Link>
            </li>
            <li className="hover:underline hover:bg-zinc-600 hover:text-zinc-300 rounded-full p-2 m-2">
            <Link  to="/setup">Itens Pc</Link>
            </li>
          </ul>
      )}
    </nav>
  );
}

export default NavigationBar;


import { useState } from "react";
import burguerMenu from "../../assets/hambuger.png";
import { Link } from "react-router-dom";
import projects from "../../assets/project.png";
import images from "../../assets/images.jpeg";
import pc from "../../assets/computer.png";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  function openNavigation() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="relative z-50">
      <button onClick={openNavigation}>
        <img
          src={burguerMenu}
          className="h-8 w-8 md:w-12 md:h-12 rounded-full"
        />
      </button>
      {isOpen && ( 
        <ul className="absolute right-0 w-60 md:left-auto md:right-0 md:w-80 text-white text-xl bg-purple-900 font-bold flex flex-col justify-between items-center rounded-md z-50 p-4 border-2">
          <li className="hover:underline border-2 hover:text-zinc-300 rounded-full w-full m-2">
            <Link to="/works" className="flex items-center justify-between gap-4 px-2">
              Projetos
              <img className="w-8 h-8" src={projects} alt="icones de projetos" />
            </Link>
          </li>
          <li className="hover:underline border-2 hover:text-zinc-300 rounded-full w-full m-2">
            <Link to="/setup" className="flex items-center justify-between gap-4 px-2">
              Itens Pc
              <img className="w-8 h-8" src={pc} alt="icones de projetos" />
            </Link>
          </li>
          <li className="hover:underline border-2 hover:text-zinc-300 rounded-full w-full m-2">
            <Link to="/images" className="flex items-center justify-between gap-4 px-2">
              Imagens
              <img className="w-8 h-8" src={images} alt="icones de projetos" />
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavigationBar;

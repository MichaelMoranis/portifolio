import { Link } from "react-router-dom";
import projects from "../../assets/project.png";
import images from "../../assets/images.jpeg";
import pc from "../../assets/computer.png";



function NavigationBar() {

  return (
    <nav className="relative flex z-50">
          <ul
            id="list"
            className="absolute right-0 top-10 w-60 md:left-auto md:right-0 md:w-80 text-white text-xl bg-purple-900 font-bold flex flex-col justify-end rounded-xl z-40 p-4 border-2 gap-4"
          >
            <li className="hover:underline border-2 hover:text-zinc-300 rounded-full p-1">
              <Link
                to="/works"
                className="flex items-center justify-around gap-4"
              >
                Projetos
                <img
                  className="w-8 h-8"
                  src={projects}
                  alt="icones de projetos"
                />
              </Link>
            </li>
            <li className="hover:underline border-2 hover:text-zinc-300 rounded-full p-1">
              <Link
                to="/setup"
                className="flex items-center justify-around gap-4"
              >
                Itens Pc
                <img className="w-8 h-8" src={pc} alt="icones de projetos" />
              </Link>
            </li>
            <li className="hover:underline border-2 hover:text-zinc-300 rounded-full p-1">
              <Link
                to="/images"
                className="flex items-center justify-around gap-4"
              >
                Imagens
                <img
                  className="w-8 h-8"
                  src={images}
                  alt="icones de projetos"
                />
              </Link>
            </li>
          </ul>
    </nav>
  );
}

export default NavigationBar;

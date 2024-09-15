import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import burguerMenu from "../../assets/hambuger.png";
import closeMenu from "../../assets/close.png";
import projects from "../../assets/project.png";
import images from "../../assets/images.jpeg";
import pc from "../../assets/computer.png";

// Hook personalizado
function useOnClickOutside(
  ref: React.RefObject<HTMLUListElement>,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex z-50">
      {isOpen ? (
        <>
          <ul
            id="list"
            ref={ref}
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
          <button onClick={toggleNavigation} className="z-50">
            <img
              src={closeMenu}
              className="h-8 w-8 md:w-12 md:h-12 rounded-full"
              alt="Menu"
            />
          </button>
        </>
      ) : (
        <button  onClick={toggleNavigation} className="z-50">
        <img
          src={burguerMenu}
          className="h-8 w-8 md:w-12 md:h-12 rounded-full"
          alt="Menu"
          id="burguer"
        />
      </button>
      )}
    </nav>
  );
}

export default NavigationBar;

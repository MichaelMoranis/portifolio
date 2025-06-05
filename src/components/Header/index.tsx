import sunIcon from "../../assets/sun.png";
import moon from "../../assets/moon-2.png";
import { Link } from "react-router-dom";
import burguerMenu from "../../assets/hambuger.png";
import closeMenu from "../../assets/close.png";
import { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  onMenuClick: () => void;
  sidebarOpen: boolean;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export default function Header({
  sidebarOpen,
  onMenuClick,
  darkMode,
  setDarkMode,
}: HeaderProps) {
  function toggleDisplayMode() {
    const newMode = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("displayMode", newMode);
  }

  return (
    <header
      className={`font-regular flex items-center justify-center w-full max-w-full mx-auto left-1/2 -translate-x-1/2 fixed top-0 z-20 p-2 rounded-b-md ${darkMode ? "bg-zinc-400" : "bg--700"
        } backdrop-blur-2xl`}
    >
      <div
        className={`flex items-center w-full max-w-4xl justify-between ${darkMode ? "text-black" : "text-white"
          }`}
      >
        <h1 className="font-bold text-2xl hover:underline">
          <Link to="/">moranisdev</Link>
        </h1>
        <ul className="gap-4 text-2xl items-center flex [@media(max-width:770px)]:hidden font-bold">
          <li className="hover:underline">
            <Link
              to="/works"
              className={
                darkMode ? "text-black hover:text-zinc-100" : "text-white"
              }
            >
              Projetos
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              to="https://www.youtube.com/@moraniss/videos"
              className={
                darkMode ? "text-black hover:text-zinc-100" : "text-white"
              }
            >
              Youtube
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              to="/articles"
              className={
                darkMode ? "text-black hover:text-zinc-100" : "text-white"
              }
            >
              Artigos
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              to="/images"
              className={
                darkMode ? "text-black hover:text-zinc-100" : "text-white"
              }
            >
              Fotos
            </Link>
          </li>
        </ul>
        <nav className="flex justify-center gap-2 items-center relative z-30">
          <button
            onClick={toggleDisplayMode}
            className="relative z-30"
            id="mode"
          >
            <img
              src={darkMode ? moon : sunIcon}
              className="h-8 w-8 sm:h-10 sm:w-10 md:w-12 md:h-12 rounded-full"
            />
          </button>
          <div>
            <img
              src={sidebarOpen ? closeMenu : burguerMenu}
              onClick={onMenuClick}
              className="[@media(min-width:770px)]:hidden h-8 w-8 md:w-12 md:h-12 rounded-full"
              alt="Menu"
              id="burguer"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

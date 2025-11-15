import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/moon-2.png";
import burguerMenu from "../../assets/hambuger.png";
import closeMenu from "../../assets/close.png";

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
      className={`
        fixed top-0 left-0 w-full z-30
        backdrop-blur-xl transition-colors duration-300 border-b
        ${darkMode ? "bg-zinc-900/60 border-zinc-700" : "bg-white/40 border-zinc-200"}
      `}
    >
      <div
        className={`
          mx-auto max-w-6xl px-6 py-3
          flex items-center justify-between
          transition-colors duration-300
          ${darkMode ? "text-zinc-100" : "text-zinc-900"}
        `}
      >
        {/* Logo */}
        <h1 className="font-bold tracking-tight text-xl md:text-2xl">
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
          >
            moranisdev
          </Link>
        </h1>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link
            to="/works"
            className="hover:opacity-70 transition-opacity"
          >
            Projetos
          </Link>
          <a
            href="https://www.youtube.com/@moraniss/videos"
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            Youtube
          </a>
          <Link
            to="/articles"
            className="hover:opacity-70 transition-opacity"
          >
            Artigos
          </Link>
          <Link
            to="/images"
            className="hover:opacity-70 transition-opacity"
          >
            Galeria Dev
          </Link>
        </nav>

        {/* Ações (tema + menu mobile) */}
        <div className="flex items-center gap-4">
          {/* Toggle theme */}
          <button
            onClick={toggleDisplayMode}
            aria-label="Alterar tema"
            className="
              p-2 rounded-xl transition 
              hover:bg-zinc-800/20 dark:hover:bg-zinc-200/20
            "
          >
            <img
              src={darkMode ? moonIcon : sunIcon}
              className="w-7 h-7 md:w-8 md:h-8"
              alt="Tema"
            />
          </button>

          {/* Mobile toggle */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-800/20 dark:hover:bg-zinc-200/20"
          >
            <img
              src={sidebarOpen ? closeMenu : burguerMenu}
              className="w-7 h-7"
              alt="Menu"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

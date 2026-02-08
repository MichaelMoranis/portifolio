import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  function toggleDisplayMode() {
    const newMode = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("displayMode", newMode);
  }

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-30
        backdrop-blur-2xl transition-all duration-300
        shadow-lg shadow-black/5
        border-b border-opacity-50
        ${
          darkMode
            ? "bg-gradient-to-r from-zinc-900/70 via-zinc-800/60 to-zinc-900/70 border-zinc-700/50"
            : "bg-gradient-to-r from-white/70 via-white/60 to-white/70 border-zinc-200/50"
        }
      `}
    >
      <div
        className={`
          mx-auto max-w-7xl w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3
          flex items-center justify-between
          transition-all duration-300
          ${darkMode ? "text-zinc-100" : "text-zinc-900"}
        `}
      >
        {/* Logo */}
        <h1 className="font-bold tracking-tighter text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
          <Link
            to="/"
            className={`
              group relative inline-block
              transition-all duration-300 ease-out
              hover:scale-105
              ${
                darkMode
                  ? "text-zinc-100 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:text-transparent hover:bg-clip-text"
                  : "text-zinc-900 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-transparent hover:bg-clip-text"
              }
            `}
          >
            moranisdev
            <span
              className={`
                absolute bottom-0 left-0 w-0 h-0.5
                transition-all duration-300
                group-hover:w-full
                ${darkMode ? "bg-blue-400" : "bg-blue-600"}
              `}
            />
          </Link>
        </h1>

        {/* Links Desktop */}
        <nav className="hidden lg:flex items-center gap-1 font-medium flex-1 justify-center">
          {[
            { label: "Projetos", path: "/works" },
            { label: "Artigos", path: "/articles" },
            { label: "Galeria Dev", path: "/images" },
          ].map((item) => (
            <div key={item.label}>
              <Link
                to={item.path}
                aria-current={location.pathname === item.path ? "page" : undefined}
                className={`
                  px-3 py-1.5 rounded-lg text-xs sm:text-sm md:text-base
                  transition-all duration-300 ease-out
                  relative group font-semibold
                  ${
                    darkMode
                      ? "text-zinc-200 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:text-transparent hover:bg-clip-text"
                      : "text-zinc-700 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-transparent hover:bg-clip-text"
                  }
                `}
              >
                {item.label}
                <span
                  className={`
                    absolute bottom-1 left-4 right-4 h-0.5 scale-x-0
                    group-hover:scale-x-100
                    transition-transform duration-300 origin-left
                    ${darkMode ? "bg-blue-400" : "bg-blue-600"}
                  `}
                />
              </Link>
            </div>
          ))}
        </nav>

        {/* Ações (tema + menu mobile) */}
        <div className="flex items-center gap-3">
          {/* Toggle theme */}
          <button
            onClick={toggleDisplayMode}
            aria-label="Alterar tema"
            className={`
              p-2 rounded-xl transition-all duration-300
              group relative
              ${
                darkMode
                  ? "hover:bg-zinc-700/50 bg-zinc-800/30"
                  : "hover:bg-zinc-200/50 bg-zinc-100/30"
              }
            `}
          >
            <img
              src={darkMode ? moonIcon : sunIcon}
              className="w-6 h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              alt="Tema"
            />
            <span
              className={`
                absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-20
                transition-opacity duration-300 pointer-events-none
                ${darkMode ? "bg-blue-400" : "bg-blue-600"}
              `}
            />
          </button>

          {/* Mobile toggle */}
          <button
            onClick={onMenuClick}
            aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={sidebarOpen}
            className={`
              lg:hidden p-2 rounded-xl
              transition-all duration-300 group
              ${
                darkMode
                  ? "hover:bg-zinc-700/50 bg-zinc-800/30"
                  : "hover:bg-zinc-200/50 bg-zinc-100/30"
              }
            `}
          >
            <img
              src={sidebarOpen ? closeMenu : burguerMenu}
              className="w-6 h-6 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110"
              alt="Menu"
            />
            <span
              className={`
                absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-20
                transition-opacity duration-300 pointer-events-none
                ${darkMode ? "bg-blue-400" : "bg-blue-600"}
              `}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

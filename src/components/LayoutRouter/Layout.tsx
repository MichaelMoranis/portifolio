import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer";
import sunIcon from "../../assets/sun.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavigationBar from "../NavigationBar";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("displayMode");
    if (savedMode) {
      setDarkMode(savedMode === "dark");
    } else {
      setDarkMode(false); // default to light mode
      localStorage.setItem("displayMode", "light");
    }
  }, []);

  function toggleDisplayMode() {
    const newMode = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("displayMode", newMode);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`flex flex-col items-center justify-center min-h-screen w-full p-4 mb-4 ${
          darkMode ? "dark:bg-zinc-100 text-black" : "text-white"
        } font-regular`}
      >
        <header
          className={`flex items-center justify-center w-full fixed top-0 left-0 z-20 p-2 ${
            darkMode ? "bg-zinc-400" : "bg-zinc-700"
          } backdrop-blur-2xl`}
        >
          <div className="flex items-center w-full max-w-4xl justify-between">
            <h1 className="font-bold text-2xl hover:underline">
              <Link to="/">moranisdev</Link>
            </h1>
            <ul className="gap-4 font-bold text-2xl items-center hidden sm:flex">
              <li className="hover:underline">
                <Link to="/works">Projetos</Link>
              </li>
              <li className="hover:underline">
                <Link to="/setup">Itens Pc</Link>
              </li>
              <li className="hover:underline">
                <Link to="/images">Fotos</Link>
              </li>
            </ul>
            <nav className="flex justify-center gap-2 items-center relative z-30">
              <button
                onClick={toggleDisplayMode}
                className="relative z-30"
                id="mode"
              >
                <img
                  src={sunIcon}
                  className="h-8 w-8 sm:h-10 sm:w-10 md:w-12 md:h-12 rounded-full"
                />
              </button>
              <NavigationBar />
            </nav>
          </div>
        </header>
        <main className="flex flex-col items-center justify-center flex-grow w-full max-w-4xl mt-16 sm:mt-10">
          <motion.div
            className="w-full m-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Outlet />
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

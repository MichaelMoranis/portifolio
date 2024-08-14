import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer";
import sunIcon from "../../assets/sun.png";
import burguerMenu from "../../assets/hambuger.png";
import { useEffect, useState } from "react";

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
      <div className={`flex flex-col items-center gap-5 justify-evenly mx-auto w-full lg:max-w-4xl p-4 dark:bg-zinc-100 ${darkMode ? 'text-black' : 'text-white'}`}>
        <main className="flex flex-col items-center gap-5 justify-evenly mx-auto w-full lg:max-w-4xl p-4 mb-6">
          <header className="flex items-center justify-center w-full rounded-xl">
            <div className="flex w-full justify-between items-center my-1">
              <div>
                <h1 className="font-bold text-2xl hover:underline">
                  <Link to="/">moranesdev</Link>
                </h1>
              </div>
              <ul className="gap-4  font-bold text-2xl hidden sm:flex justify-between">
                <li className="hover:underline">posts</li>
                <li className="hover:underline">
                  <Link to="/works">jobs</Link>
                </li>
                <li className="hover:underline">sobre</li>
              </ul>
              <nav>
                <ul className="flex gap-4 items-center justify-between">
                  <li>
                    <button onClick={toggleDisplayMode}>
                      <img
                        src={sunIcon}
                        className="h-8 w-8 md:w-12 md:h-12 bg-zinc-300 rounded-full"
                      />
                    </button>
                  </li>
                  <li>
                    <button onClick={toggleDisplayMode}>
                      <img
                        src={burguerMenu}
                        className="h-8 w-8 md:w-12 md:h-12 bg-zinc-300 rounded-full"
                      />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

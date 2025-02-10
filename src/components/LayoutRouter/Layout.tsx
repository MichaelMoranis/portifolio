import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import NavigationBar from "../NavigationBar";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSideBar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    const savedMode = localStorage.getItem("displayMode");
    if (savedMode) {
      setDarkMode(savedMode === "dark");
    } else {
      localStorage.setItem("displayMode", "light");
    }
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Header
        sidebarOpen={sidebarOpen}
        onMenuClick={toggleSideBar}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Sidebar responsivo */}
      {sidebarOpen && <NavigationBar onClose={toggleSideBar} sidebarOpen={sidebarOpen} />}

      {/* Conteúdo principal responsivo */}
      <div
        className={`flex flex-col items-center justify-center min-h-screen w-full px-4 gap-12 ${
          darkMode ? "dark:bg-zinc-100 text-black" : "text-white"
        } font-regular`}
      >
        <motion.div
          className="flex justify-center items-center w-full max-w-screen-xl mt-12 gap-12"
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
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

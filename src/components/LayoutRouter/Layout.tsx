import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import NavigationBar from "../NavigationBar";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  useEffect(() => {
    const savedMode = localStorage.getItem("displayMode");
    if (savedMode) {
      setDarkMode(savedMode === "dark");
    } else {
      setDarkMode(false); // default to light mode
      localStorage.setItem("displayMode", "light");
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header sidebarOpen={sidebarOpen} onMenuClick={toggleSideBar} darkMode={darkMode} setDarkMode={setDarkMode} />
      {sidebarOpen && <NavigationBar onClose={toggleSideBar} sidebarOpen={sidebarOpen} />}
      <div
        className={`flex flex-col items-center justify-center min-h-screen w-full p-4 mb-4 ${
          darkMode ? "dark:bg-zinc-100 text-black" : "text-white"
        } font-regular`}
      >
       
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

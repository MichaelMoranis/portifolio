import { motion } from "framer-motion";
import projects from "../../assets/project.png";
import youtube from "../../assets/youtube.png";
import images from "../../assets/images.jpeg";
import pc from "../../assets/computer.png";
import insta from "../../assets/instagram-.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { SocialIcon } from "./SocialIcon";
import { NavItem } from "./NavItem";

type NavigationBarProps = {
  onClose: () => void;
  sidebarOpen: boolean;
};

function NavigationBar({ onClose, sidebarOpen }: NavigationBarProps) {
  return (
    <>
      {/* Backdrop (Fecha o menu ao clicar fora) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: sidebarOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 right-0 h-full w-64 bg-zinc-900 text-white  z-50 flex flex-col"
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-zinc-400 transition"
        >
          X
        </button>

        {/* Links */}
        <ul className="mt-8 space-y-4 p-6">
          <NavItem
            to="/works"
            label="Projetos"
            icon={projects}
            onClose={onClose}
          />
          <NavItem 
          to="/setup" 
          label="Itens PC" 
          icon={pc}
          onClose={onClose}
          />
          <NavItem 
          to="/images" 
          label="Minhas Imagens" 
          icon={images}
          onClose={onClose}
          />
          <NavItem
            to="https://www.youtube.com/@moraniss/videos"
            label="Youtube"
            icon={youtube}
            onClose={onClose}
          />
        </ul>

        {/* Ícones sociais */}
        <div className=" flex justify-center gap-4 pb-6 mt-auto">
          <SocialIcon
            link="https://instagram.com"
            icon={insta}
            alt="Instagram"
          />
          <SocialIcon link="https://github.com" icon={github} alt="GitHub" />
          <SocialIcon
            link="https://linkedin.com"
            icon={linkedin}
            alt="LinkedIn"
          />
        </div>
      </motion.nav>
    </>
  );
}

// Componente para os ícones sociais

export default NavigationBar;

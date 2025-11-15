import projects from "../../assets/project.png";
import { motion } from "framer-motion";
import youtube from "../../assets/youtube.png";
import images from "../../assets/images.png";
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

export default function NavigationBar({ onClose, sidebarOpen }: NavigationBarProps) {
  return (
    <>
      {/* Backdrop – clicável para fechar */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: sidebarOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="
          fixed top-0 right-0 h-full w-72 
          bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 
          text-white z-50 flex flex-col shadow-2xl border-l border-white/10
          backdrop-blur-xl
        "
      >
        {/* BOTÃO DE FECHAR */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 
            w-10 h-10 rounded-full 
            flex items-center justify-center
            bg-white/10 hover:bg-white/20 
            transition border border-white/20
          "
        >
          <span className="text-xl font-light">×</span>
        </button>

        {/* MENU */}
        <ul className="mt-20 space-y-3 px-6">
          <NavItem to="/works" label="Projetos" icon={projects} onClose={onClose} />

          <NavItem to="/articles" label="Artigos" icon={pc} onClose={onClose} />

          <NavItem to="/images" label="Minhas Imagens" icon={images} onClose={onClose} />

          <NavItem
            to="https://www.youtube.com/@moraniss/videos"
            label="Youtube"
            icon={youtube}
            onClose={onClose}
          />
        </ul>

        {/* DIVISOR SUTIL */}
        <div className="mt-6 mx-6 h-px bg-white/10" />

        {/* REDES SOCIAIS – estilo premium */}
        <div className="flex justify-center gap-5 pb-10 mt-auto">
          <SocialIcon link="https://instagram.com" icon={insta} alt="Instagram" />
          <SocialIcon link="https://github.com" icon={github} alt="GitHub" />
          <SocialIcon link="https://linkedin.com" icon={linkedin} alt="LinkedIn" />
        </div>
      </motion.nav>
    </>
  );
}

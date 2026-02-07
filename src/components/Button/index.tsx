import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button() {
  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-2/3 md:w-1/2 lg:w-5/12"
      >
        <Link
          to="/works"
          className="
            relative overflow-hidden group
            flex items-center justify-center gap-3
            w-full px-6 sm:px-8 py-4
            font-bold text-lg sm:text-xl
            rounded-xl border-2 border-transparent
            transition-all duration-300
            
            bg-gradient-to-r from-blue-500 to-blue-600 
            hover:from-blue-600 hover:to-blue-700
            text-white
            hover:shadow-lg hover:shadow-blue-500/50
            
            dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500
            dark:hover:from-blue-500 dark:hover:to-purple-600
            dark:hover:shadow-lg dark:hover:shadow-purple-500/50
          "
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

          {/* Conteúdo */}
          <span className="relative z-10">Meus Trabalhos</span>

          {/* Ícone animado */}
          <motion.div
            className="relative z-10"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            whileHover={{ x: 10 }}
          >
            <FaLocationArrow className="text-lg" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Button;
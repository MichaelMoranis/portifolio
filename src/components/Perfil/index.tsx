import { motion } from "framer-motion";
import perfil from "../../assets/perfil.jpeg";

function Perfil() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-16 lg:gap-20">
          {/* Conteúdo Textual */}
          <motion.div
            className="flex flex-col justify-center flex-1 text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="font-bold text-zinc-50  dark:text-zinc-900  text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 leading-tight"
              variants={itemVariants}
            >
              Michael Moranis
            </motion.h1>

            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Developer • Designer • Creator
              </p>

              <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
                Especializado em web design, desenvolvimento frontend e
                fotografia criativa
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8 justify-center md:justify-start"
              variants={itemVariants}
            >
              <button
                className="
                  px-8 py-3 rounded-lg font-semibold
                  bg-gradient-to-r from-blue-500 to-blue-600 text-white
                  hover:shadow-lg hover:shadow-blue-500/50
                  transition-all duration-300 hover:scale-105
                "
              >
                Ver Projetos
              </button>

              <button
                className="
                  px-8 py-3 rounded-lg font-semibold
                  bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-800 dark:border-zinc-300 text-zinc-900 dark:text-zinc-100
                  hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-200 dark:hover:text-zinc-900
                  transition-all duration-300 hover:scale-105
                "
              >
                Contato
              </button>
            </motion.div>
          </motion.div>

          {/* Imagem de Perfil */}
          <div className="relative flex-shrink-0">
            <motion.div
              className="flex-shrink-0"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

                {/* Imagem */}
                <motion.img
                  src={perfil}
                  alt="Michael Moranis - Desenvolvedor Web e Designer"
                  loading="eager"
                  className="
                    relative z-10 rounded-full h-full w-full object-cover
                    ring-4 ring-zinc-200 dark:ring-zinc-700
                    shadow-2xl hover:shadow-blue-500/30 transition-all duration-500
                  "
                  whileHover={{ scale: 1.05 }}
                />

                {/* Loading Skeleton */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-300 animate-pulse" />
              </div>
            </motion.div>

            {/* Badge Status - Fora da animação */}
            <div className="absolute -bottom-3 -right-3 z-30">
              <motion.div
                className="bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold px-3 py-1.5 rounded-full text-xs shadow-lg flex items-center gap-1.5 whitespace-nowrap"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Disponível
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Perfil;

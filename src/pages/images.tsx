import { motion } from "framer-motion";
import street from "../pages/images/street-01.jpg";
import formig from "../pages/images/formig.jpg";
import tableHome from "../assets/mesa-trabalho.jpg";
import womam from "../pages/images/woman.jpg";
import forest from "../pages/images/forest.jpg";

function Images() {
  const images = [
    { src: street, title: "Paixão por fotos e imagens", alt: "Foto de rua" },
    { src: formig, title: "Elementos da natureza", alt: "Formiga na natureza" },
    { src: womam, title: "Engenharia e arquitetura", alt: "Mulher na arquitetura" },
    { src: forest, title: "Árvores e plantas", alt: "Floresta" },
    { src: tableHome, title: "Decoração e itens para PC", alt: "Mesa de trabalho" },
  ];

  return (
    <motion.section
      className="min-h-screen w-full px-6 py-16 bg-zinc-850 dark:bg-zinc-100 transition-colors duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Cabeçalho */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <motion.h1
          className="text-3xl md:text-4xl font-semibold text-zinc-100 dark:text-zinc-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Galeria de Imagens
        </motion.h1>

        <motion.p
          className="mt-4 text-zinc-400 dark:text-zinc-600 leading-relaxed text-base md:text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Uma coleção de fotografias capturadas com minha Canon T6 Rebel EOS —
          explorando luz, sombra e a beleza dos pequenos detalhes do dia a dia.
        </motion.p>
      </div>

      {/* Grade de imagens */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md bg-zinc-800 dark:bg-zinc-200 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Legenda sobreposta */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/70 to-transparent flex items-end rounded-2xl">
              <p className="text-zinc-100 dark:text-zinc-800 text-sm p-4 font-medium">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Images;

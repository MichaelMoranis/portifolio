import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

import street from "../pages/images/street-01.jpg";
import formig from "../pages/images/formig.jpg";
import tableHome from "../assets/mesa-trabalho.jpg";
import womam from "../pages/images/woman.jpg";
import forest from "../pages/images/forest.jpg";

interface GalleryImage {
  src: string;
  title: string;
  desc: string;
  alt: string;
  tag: string;
}

function DevGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = useCallback((src: string) => {
    setImageErrors((prev) => new Set([...prev, src]));
  }, []);

  const images: GalleryImage[] = [
    {
      src: tableHome,
      title: "Ambiente de Criação",
      desc: "Meu espaço de trabalho, onde planejo soluções, escrevo código e desenvolvo interfaces.",
      alt: "Mesa de trabalho",
      tag: "Workflow",
    },
    {
      src: street,
      title: "Percepção Visual",
      desc: "Treinar o olhar melhora o design, o UX e a forma como estruturo interfaces.",
      alt: "Foto de rua",
      tag: "Design Thinking",
    },
    {
      src: womam,
      title: "Estruturas e Lógica",
      desc: "Arquiteturas inspiram a forma como organizo componentes, módulos e fluxos.",
      alt: "Mulher na arquitetura",
      tag: "Frontend Architecture",
    },
    {
      src: formig,
      title: "Detalhes Importam",
      desc: "Na natureza e no código: precisão e atenção ao detalhe fazem diferença.",
      alt: "Formiga",
      tag: "Craftsmanship",
    },
    {
      src: forest,
      title: "Clareza Mental",
      desc: "Organizar ideias, revisar projetos e manter a mente limpa para criar bem.",
      alt: "Floresta",
      tag: "Mindset",
    },
  ];

  const allTags = Array.from(new Set(images.map((img) => img.tag)));
  const filteredImages = selectedTag
    ? images.filter((img) => img.tag === selectedTag)
    : images;

  return (
    <motion.section
      className="min-h-screen w-full px-6 py-16 bg-zinc-900 dark:bg-zinc-100 transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Cabeçalho */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1
          className="text-3xl md:text-5xl font-semibold text-zinc-100 dark:text-zinc-800"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Galeria Dev
        </motion.h1>

        <motion.p
          className="mt-5 text-zinc-400 dark:text-zinc-600 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Uma visão mais profunda do meu processo criativo como desenvolvedor web —  
          meus espaços, minhas inspirações e a forma como enxergo design, arquitetura  
          e lógica ao construir experiências digitais.
        </motion.p>
      </div>

      {/* Filtros por Tag */}
      <motion.div
        className="max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-wrap justify-center gap-3">
          <motion.button
            onClick={() => setSelectedTag(null)}
            className={`
              px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-sm
              ${
                selectedTag === null
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105"
                  : "bg-zinc-800/50 dark:bg-zinc-300/50 text-zinc-300 dark:text-zinc-700 hover:bg-zinc-700/50 dark:hover:bg-zinc-200/50"
              }
            `}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Todas
          </motion.button>
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`
                px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-sm
                ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105"
                    : "bg-zinc-800/50 dark:bg-zinc-300/50 text-zinc-300 dark:text-zinc-700 hover:bg-zinc-700/50 dark:hover:bg-zinc-200/50"
                }
              `}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode="wait">
          {filteredImages.length > 0 ? (
            filteredImages.map((item, index) => {
              const hasError = imageErrors.has(item.src);
              return (
                <motion.div
                  key={item.src}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-50 dark:to-zinc-200 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
                  whileHover={{ scale: 1.03, y: -8 }}
                  onClick={() => setSelectedImage(item)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {!hasError ? (
                    <>
                      {/* Imagem com overlay */}
                      <div className="relative overflow-hidden h-96">
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          onError={() => handleImageError(item.src)}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay com gradiente sofisticado */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
                      </div>

                      {/* Conteúdo do Card */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        {/* Badge da Tag */}
                        <motion.div
                          className="inline-flex items-center gap-2 w-fit mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="h-2 w-2 rounded-full bg-blue-300 shadow-lg shadow-blue-300/50" />
                          <span className="text-xs font-bold uppercase tracking-widest text-white drop-shadow-lg">
                            {item.tag}
                          </span>
                        </motion.div>

                        {/* Título */}
                        <motion.h3
                          className="text-2xl font-bold text-white mb-2 leading-tight tracking-tight drop-shadow-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          {item.title}
                        </motion.h3>

                        {/* Descrição */}
                        <motion.p
                          className="text-sm text-white/90 leading-relaxed line-clamp-2 drop-shadow-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {item.desc}
                        </motion.p>

                        {/* CTA Visual */}
                        <motion.div
                          className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-xs font-semibold text-white drop-shadow-lg">
                            Ver detalhes
                          </span>
                          <svg
                            className="w-3 h-3 text-white drop-shadow-lg"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-800 dark:from-zinc-300 dark:to-zinc-400">
                      <div className="text-center">
                        <div className="mb-3">
                          <svg
                            className="w-12 h-12 text-zinc-500 dark:text-zinc-600 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-zinc-400 dark:text-zinc-600 text-sm font-medium">
                          Erro ao carregar
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-700 text-xs mt-1">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })
          ) : (
            <motion.div
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-zinc-400 dark:text-zinc-600 text-lg">
                Nenhuma imagem encontrada para este filtro
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 dark:bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full bg-zinc-900 dark:bg-zinc-100 rounded-2xl overflow-hidden shadow-xl flex flex-col max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão fechar */}
              <button
                className="absolute top-3 right-3 text-zinc-300 dark:text-zinc-700 hover:text-red-400 transition z-10"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>

              <div className="flex-1 overflow-y-auto">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full object-cover"
                />

                <div className="p-6">
                  <span className="text-xs font-medium text-blue-300 dark:text-blue-700">
                    {selectedImage.tag}
                  </span>

                  <h2 className="text-2xl font-semibold text-zinc-100 dark:text-zinc-800 mt-1">
                    {selectedImage.title}
                  </h2>

                  <p className="text-zinc-300 dark:text-zinc-700 mt-2 leading-relaxed">
                    {selectedImage.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rodapé */}
      <motion.div
        className="max-w-3xl mx-auto text-center mt-20 text-zinc-400 dark:text-zinc-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-base md:text-lg">
          Cada imagem representa uma parte do meu processo como desenvolvedor:  
          a forma como observo o mundo influencia diretamente como construo interfaces,  
          componho layouts, organizo componentes e crio soluções funcionais e elegantes.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default DevGallery;

import { motion } from "framer-motion";
import street from "../pages/images/street-01.jpg";
import formig from "../pages/images/formig.jpg";
import tableHome from "../assets/mesa-trabalho.jpg";
import womam from "../pages/images/woman.jpg";
import forest from "../pages/images/forest.jpg";

function DevGallery() {
  const images = [
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
          Dev Gallery
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

      {/* Grade de imagens */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg bg-zinc-800 dark:bg-zinc-200 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay com contraste perfeito para ambos temas */}
            <div
              className="
                absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 
                flex flex-col justify-end p-5 rounded-2xl

                bg-gradient-to-t from-black/80 to-transparent
                dark:bg-gradient-to-t dark:from-white/70 dark:to-transparent
              "
            >
              {/* TAG */}
              <span
                className="
                  text-xs font-medium mb-1
                  text-blue-300 dark:text-blue-700
                "
              >
                {item.tag}
              </span>

              {/* Título e texto com cores invertidas por tema */}
              <h2
                className="
                  text-lg font-semibold 
                  text-zinc-100 dark:text-zinc-800
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  text-sm mt-1 
                  text-zinc-300 dark:text-zinc-700
                "
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rodapé da seção */}
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

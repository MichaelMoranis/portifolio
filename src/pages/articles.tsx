import imageOne from "../pages/images/articles-one.png";
import imageTwo from "../pages/images/articles-two.png";
import imageTree from "../pages/images/articles-tree.png";
import { motion } from "framer-motion";

function Articles() {
  const navArticles = [
    {
      src: imageOne,
      alt: "How I Managed a Delay in a Freelance Project and Kept My Client Happy",
      href: "https://dev.to/michaelmoranis/how-i-managed-a-delay-in-a-freelance-project-and-kept-my-client-happy-2ao3",
    },
    {
      src: imageTwo,
      alt: "Beginning of my career as a freelancer",
      href: "https://dev.to/michaelmoranis/-storing-data-in-the-database-with-javascript-2bkf",
    },
    {
      src: imageTree,
      alt: "Fatigue and Focus as a Freelance Dev",
      href: "https://dev.to/michaelmoranis/apredendo-construcao-de-apis-com-node-e-typescript-o11",
    },
  ];

  return (
    <motion.section
      className="w-full max-w-[1100px] mx-auto px-4 md:px-6 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Cabeçalho */}
      <div className="text-center mb-10">
        <h1 className="font-semibold text-2xl md:text-3xl mb-2">
          Artigos publicados
        </h1>
        <p className="text-base opacity-80 max-w-2xl mx-auto">
          Durante toda minha trajetória como desenvolvedor web solo, escrevi
          sobre desafios, aprendizados e experiências reais de projetos.
        </p>
      </div>

      {/* Galeria */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {navArticles.map((article, index) => (
          <motion.a
            key={index}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={article.src}
              alt={article.alt}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="absolute bottom-4 left-4 right-4 text-sm md:text-base font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {article.alt}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default Articles;

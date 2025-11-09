import { motion } from "framer-motion";
import imagelist from "../assets/tarefa.jpeg";
import linkmichael from "../pages/images/linkmichael.jpg";
import jogosLoterias from "../pages/images/jogos-loterias.png";
import uniaovistorias from "../pages/images/uniao-vistorias.png";
import About from "../components/About";

function Works() {
  const navProjects = [
    {
      href: "https://app-tarefa.vercel.app",
      text: "Projeto Lista de Tarefas",
      image: imagelist,
      alt: "Aplicação lista de tarefas",
    },
    {
      href: "https://linktree-midia.vercel.app/",
      text: "Página para Redes Sociais",
      image: linkmichael,
      alt: "Links redes sociais Michael",
    },
    {
      href: "https://sorteios-loterias.vercel.app/",
      text: "Projeto Resultados Loterias",
      image: jogosLoterias,
      alt: "Aplicação resultados de loterias",
    },
    {
      href: "https://uniao-vistorias.vercel.app/",
      text: "Site Empresa União Vistorias",
      image: uniaovistorias,
      alt: "Site construído para a empresa União Vistorias",
    },
  ];

  return (
    <motion.section
      className="min-h-screen w-full px-6 py-16 bg-zinc-850 dark:bg-zinc-100 transition-colors duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Cabeçalho e texto de introdução */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <About
          text="Aqui estão alguns dos projetos pessoais e trabalhos freelancer que já realizei. Incluo aqui projetos desenvolvidos durante meus estudos e também aqueles criados para meus clientes."
        />
      </div>

      {/* Grid de projetos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {navProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl shadow-md bg-zinc-800 dark:bg-zinc-200 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay moderno com título */}
            <div className="absolute inset-0 flex items-end justify-start p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
              <p className="text-zinc-100 dark:text-zinc-800 text-lg font-semibold drop-shadow-md">
                {project.text}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default Works;

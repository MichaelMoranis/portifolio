import imagelist from "../assets/tarefa.jpeg";
import orcamentos from "../assets/orçamentos.jpg";
import linkmichael from "../pages/images/linkmichael.jpg";
import linkmiss from "../pages/images/linkmiss.jpg";
import jogosLoterias from "../pages/images/jogos-loterias.png";
import uniaovistorias from "../pages/images/uniao-vistorias.png";
import { motion } from "framer-motion";
import About from "../components/About";

function Works() {

  const navProjects = [
    {
      href: "https://app-tarefa.vercel.app",
      text: "Projeto lista de tarefas",
      image: imagelist,
      alt: "aplicacao lista de tarefas"
    },
    {
      href: "https://pro-orcamentos.vercel.app/",
      text: "Projeto gerador de orçamentos",
      image: orcamentos,
      alt: "aplicação orçamentos"
    },
    {
      href: "https://linktree-midia.vercel.app/",
      text: " Página web link para redes sociais.",
      image: linkmichael,
      alt: "links redes sociais michael"
    },
    {
      href:"https://sorteios-loterias.vercel.app/",
      text: "Projeto Resultados Loterias",
      image: jogosLoterias,
      alt: "aplicacao resultados jogos de loterias"
    },
    {
      href: "https://medeiros.vercel.app/",
      text: " Projeto paralelo midias sociais",
      image: linkmiss,
      alt: "aplicacao redes socias mislane"
    },
    {
      href: "https://uniao-vistorias.vercel.app/",
      text: "Site empresa União Vistorias",
      image: uniaovistorias,
      alt: "site construido para a empresa união vistorias"
    }
  ]

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <section className="flex flex-col flex-wrap items-center justify-center mt-10 m-auto md:mt-5 gap-6  w-full md:w-full lg:max-w-4xl p-4">
        <About
          text="Aqui estão alguns dos projetos pessoais e  e trabalhos freelancer que ja realizei. Aqui conto com alguns projetos que construi enquanto estudava e também com projetos que desenvolvi para alguns dos meus clientes!"
        />
        <section className="flex flex-col items-center gap-8 justify-evenly mx-4 w-80 lg:max-w-4xl md:flex-wrap lg:flex-wrap p-4 md:w-full md:flex-row">
          {
            navProjects.map((project, index) => (
              <a
              key={index}
              href={project.href}
              target="_blank"
              className="h-52 w-80 my-4 md:w-80 rounded-lg"
            >
              <p className=" border-b-4 border-b-zinc-600 mb-2">
                {project.text}
              </p>
              <img
                className="rounded-xl h-52 w-80"
                src={project.image}
                loading="lazy"
                height="300px"
                width="300px"
                alt={project.alt}
              />
            </a>
            ))
          }
        </section>
      </section>
    </motion.div>
  );
}

export default Works;

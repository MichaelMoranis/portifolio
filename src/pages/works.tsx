import imagelist from "../assets/tarefa.jpeg";
import linkmichael from "../pages/images/linkmichael.jpg";
import jogosLoterias from "../pages/images/jogos-loterias.png";
import uniaovistorias from "../pages/images/uniao-vistorias.png";
import { motion } from "framer-motion";
import About from "../components/About";

function Works() {

  const navProjects = [
    {
      href: "https://app-tarefa.vercel.app",
      text: "Projeto lista de tarefas.",
      image: imagelist,
      alt: "aplicacao lista de tarefas"
    },
    {
      href: "https://linktree-midia.vercel.app/",
      text: " Página para redes sociais.",
      image: linkmichael,
      alt: "links redes sociais michael"
    },
    {
      href:"https://sorteios-loterias.vercel.app/",
      text: "Projeto Resultados Loterias.",
      image: jogosLoterias,
      alt: "aplicacao resultados jogos de loterias"
    },
    {
      href: "https://uniao-vistorias.vercel.app/",
      text: "Site empresa União Vistorias.",
      image: uniaovistorias,
      alt: "site construido para a empresa união vistorias"
    }
  ]

//   return (
//     <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01],
//       }}
//     >
//       <section className="flex flex-col flex-wrap items-center justify-center mt-10 md:mt-5 gap-6  w-full lg:max-w-4xl p-4">
//         <About
//           text="Aqui estão alguns dos projetos pessoais e  e trabalhos freelancer que ja realizei. Aqui conto com alguns projetos que construi enquanto estudava e também com projetos que desenvolvi para alguns dos meus clientes!"
//         />
//         <section className="flex flex-col items-center gap-8 justify-evenly mt-5  md:flex-wrap lg:flex-wrap p-2 w-full md:flex-row max-w-[850px]">
//           {
//             navProjects.map((project, index) => (
//               <a
//               key={index}
//               href={project.href}
//               target="_blank"
//               className="h-52 w-full md:-80 rounded-lg"
//             >
//               <p className="font-regular font-bold text-xl w-full">
//                 {project.text}
//               </p>
//               <img
//                 className="rounded-xl h-52 w-full md:w-80"
//                 src={project.image}
//                 loading="lazy"
//                 height="300px"
//                 width="300px"
//                 alt={project.alt}
//               />
//             </a>
//             ))
//           }
//         </section>
//       </section>
//     </motion.div>
//   );
// }

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
    <section className="flex flex-col items-center w-full p-4 mx-auto mt-10 md:mt-5 gap-6 lg:max-w-4xl">
      <About
        text="Aqui estão alguns dos projetos pessoais e  e trabalhos freelancer que ja realizei. Aqui conto com alguns projetos que construi enquanto estudava e também com projetos que desenvolvi para alguns dos meus clientes!"
      />
      <section className="grid grid-cols-1 gap-8 mt-5 w-full sm:grid-cols-2 lg:grid-cols-2">
        {navProjects.map((project, index) => (
          <a
            key={index}
            href={project.href}
            target="_blank"
            className="rounded-lg"
          >
            <p className="font-regular font-bold text-xl w-full">
              {project.text}
            </p>
            <img
              className="rounded-xl w-full h-auto aspect-video object-cover"
              src={project.image}
              loading="lazy"
              alt={project.alt}
            />
          </a>
        ))}
      </section>
    </section>
  </motion.div>
);
}

export default Works;

import imagelist from "../assets/tarefa.jpeg";
import orcamentos from "../assets/orçamentos.jpg";
import imgBanner from "../assets/bannerWork.png";
import linkmichael from "../pages/images/linkmichael.jpg"
import linkmiss from "../pages/images/linkmiss.jpg"
import { motion } from "framer-motion";

function Works() {
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
      <section className="flex flex-col items-center justify-center mt-10 m-auto md:mt-5 gap-6  w-80 md:w-full lg:max-w-4xl p-4">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-64 mx-4 md:w-4/3 p-6">
              <img
                className="rounded-md"
                src={imgBanner}
                alt="imagem de mesa homeoffice"
              />
            </div>
          </div>
          <div>
            <p className="text-justify w-80 font-regular font-bold text-2xl">
              Lista de projetos que tenho desenvolvido ao longo dos anos como
              desenvolvedor web !
            </p>
          </div>
          <section className="flex flex-col items-center gap-8 justify-evenly mx-4 w-80 lg:max-w-4xl md:flex-wrap lg:flex-wrap p-4 md:w-full md:flex-row">
            <a
              href="https://app-tarefa.vercel.app"
              target="_blank"
              className="h-52 w-80 my-4 md:w-80 rounded-lg"
            >
              <p className=" border-b-4 border-b-zinc-600 mb-2">
                Projeto lista de tarefas
              </p>
              <img
                className="rounded-xl h-52 w-80"
                src={imagelist}
                alt="aplicacao lista de tarefas"
              />
            </a>
            <a
              href="https://pro-orcamentos.vercel.app/"
              className="h-52 w-80 my-4 md:w-80 rounded-lg"
            >
              <p className="border-b-4 border-b-zinc-600 mb-2">
                Projeto gerador de orçamentos
              </p>
              <img
                className="rounded-xl h-52 w-96"
                src={orcamentos}
                alt="mesa de trabalho"
              />
            </a>
            <a
              href="https://linktree-midia.vercel.app/"
              className="h-52 w-80 my-4 md:w-80 rounded-lg"
            >
              <p className="border-b-4 border-b-zinc-600 mb-2">
                Página web link para redes sociais.
              </p>
              <img
                className="rounded-xl h-52 w-96"
                src={linkmichael}
                alt="mesa de trabalho"
              />
            </a>
            <a
              href="https://medeiros.vercel.app/"
              className="h-52 w-80 my-4 md:w-80 rounded-lg"
            >
              <p className="border-b-4 border-b-zinc-600 mb-2">
                Projeto paralelo midias sociais
              </p>
              <img
                className="rounded-xl h-52 w-96"
                src={linkmiss}
                alt="mesa de trabalho"
              />
            </a>
          </section>
      </section>
    </motion.div>
  );
}

export default Works;

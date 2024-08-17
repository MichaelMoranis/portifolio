import imagelist from "../assets/tarefa.jpeg";
import orcamentos from "../assets/orçamentos.jpg";
import imgBanner from "../assets/bannerWork.png";
import { motion } from "framer-motion";

function Works() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex flex-col items-center justify-center w-96 gap-5 mx-8 lg:max-w-4xl lg:w-screen font-regular font-bold mt-10">
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
        <section className="flex flex-col items-center gap-5 justify-evenly mx-4 w-80 lg:max-w-4xl p-4 md:w-full md:flex-row">
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
        </section>
      </div>
    </motion.div>
  );
}

export default Works;

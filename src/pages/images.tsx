import street from "../pages/images/street-01.jpg";
import formig from "../pages/images/formig.jpg";
import tableHome from "../assets/mesa-trabalho.jpg";
import womam from "../pages/images/woman.jpg";
import forest from "../pages/images/forest.jpg";
import { motion } from "framer-motion";

function Images() {
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
      <section className="flex flex-col items-center gap-8 justify-evenly mx-auto w-80 lg:max-w-4xl md:flex-wrap lg:flex-wrap p-4 md:w-full md:flex-row mt-10">
        <div className="flex flex-col w-full gap-4">
          <h1 className="font-regular font-bold text-4xl ">
            Minha seção de imagens amadoras usando uma Canon T6 Rebel EOS!
          </h1>
          <h3>
            Recentemente tenho me aventurado a praticar fazer algumas
            fotografias, percebi que tinha encontrado mais um novo hobbie, e
            desde entao tenho feito algumas imagens, espero que gostem !!!
          </h3>
        </div>
        <div className="h-52 w-80 my-4 md:w-80 rounded-lg">
          <p className=" border-b-4 border-b-zinc-600 mb-2">
            Paixão por fotos e imagens.
          </p>
          <img
            className="rounded-xl h-52 w-96"
            src={street}
            loading="lazy" height="300px" width="300px"
            alt="aplicacao lista de tarefas"
          />
        </div>
        <div className="h-52 w-80 my-4 md:w-80 rounded-lg">
          <p className=" border-b-4 border-b-zinc-600 mb-2">
            Elementos da natureza.
          </p>
          <img
            className="rounded-xl h-52 w-96"
            src={formig}
            loading="lazy" height="300px" width="300px"
            alt="aplicacao lista de tarefas"
          />
        </div>
        <div className="h-52 w-80 my-4 md:w-80 rounded-lg">
          <p className=" border-b-4 border-b-zinc-600 mb-2">
            Engenharia e arquitetura.
          </p>
          <img
            className="rounded-xl h-52 w-96"
            src={womam}
            loading="lazy" height="300px" width="300px"
            alt="aplicacao lista de tarefas"
          />
        </div>
        <div className="h-52 w-80 my-4 md:w-80 rounded-lg">
          <p className=" border-b-4 border-b-zinc-600 mb-2">
            Àrvores e plantas.
          </p>
          <img
            className="rounded-xl h-52 w-96"
            src={forest}
            loading="lazy" height="300px" width="300px"
            alt="aplicacao lista de tarefas"
          />
        </div>
        <div className="h-52 w-80 my-4 md:w-80 rounded-lg">
          <p className=" border-b-4 border-b-zinc-600 mb-2">
            Decoração e itens para pc.
          </p>
          <img
            className="rounded-xl h-52 w-96"
            src={tableHome}
            loading="lazy" height="300px" width="300px"
            alt="mesa de trabalho"
          />
        </div>
      </section>
    </motion.div>
  );
}

export default Images;

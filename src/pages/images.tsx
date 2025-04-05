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
      <section className="flex justify-center items-center gap-6 mt-6 flex-wrap max-w-[850px] ">
        <div className="flex flex-col w-full  gap-4">
          <h1 className="font-regular font-bold text-2xl text-center ">
            Minha seção de imagens amadoras usando uma Canon T6 Rebel EOS!
          </h1>
          <h3 className="text-center">
            Recentemente tenho me aventurado a praticar fazer algumas
            fotografias, percebi que tinha encontrado mais um novo hobbie, e
            desde entao tenho feito algumas imagens, espero que gostem !!!
          </h3>
        </div>
          <div className="flex items-center justify-center flex-wrap gap-8">
            <div className="h-52  rounded-lg">
              <p className=" border-b-4 border-b-zinc-600 mb-2">
                Paixão por fotos e imagens.
              </p>
              <div>
              <img
                className="rounded-xl h-52 w-full"
                src={street}
                loading="lazy"
                height="300px"
                width="300px"
                alt="aplicacao lista de tarefas"
              />
              </div>
            </div>
            <div className="h-52 rounded-lg">
              <p className=" border-b-4 border-b-zinc-600 mb-2">
                Elementos da natureza.
              </p>
              <img
                className="rounded-xl h-52 w-full"
                src={formig}
                loading="lazy"
                height="300px"
                width="300px"
                alt="aplicacao lista de tarefas"
              />
            </div>
            <div className="h-52  rounded-lg">
              <p className=" border-b-4 border-b-zinc-600 mb-2">
                Engenharia e arquitetura.
              </p>
              <img
                className="rounded-xl h-52 w-full"
                src={womam}
                loading="lazy"
                height="300px"
                width="300px"
                alt="aplicacao lista de tarefas"
              />
            </div>
            <div className="h-52  rounded-lg">
              <p className=" border-b-4 border-b-zinc-600 mb-2">
                Àrvores e plantas.
              </p>
              <img
                className="rounded-xl h-52 w-full"
                src={forest}
                loading="lazy"
                height="300px"
                width="300px"
                alt="aplicacao lista de tarefas"
              />
            </div>
            <div className="h-52  rounded-lg">
              <p className=" border-b-4 border-b-zinc-600 mb-2">
                Decoração e itens para pc.
              </p>
              <img
                className="rounded-xl h-52 w-full"
                src={tableHome}
                loading="lazy"
                height="300px"
                width="300px"
                alt="mesa de trabalho"
              />
            </div>
            <div className="h-52  rounded-lg">
              <p className=" border-b-4 border-b-zinc-600 mb-2">
                Decoração e itens para pc.
              </p>
              <img
                className="rounded-xl h-52 w-full"
                src={tableHome}
                loading="lazy"
                height="300px"
                width="300px"
                alt="mesa de trabalho"
              />
            </div>
          </div>
      </section>
    </motion.div>
  );
}

export default Images;

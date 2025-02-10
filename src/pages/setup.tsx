import kumara from "../pages/images/kumara.jpg";
import keyboard from "../pages/images/teclado-redragon-60.jpg";
import mouse from "../pages/images/mouse-canon.jpg";
import { motion } from "framer-motion";

function Setup() {
  return (
    <motion.div
      className="box p-0"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <section className="flex flex-col items-center gap-8 justify-evenly mt-5 w-80 md:flex-wrap lg:flex-wrap p-2 md:w-full md:flex-row max-w-[850px]">
        <div className="flex flex-col w-full gap-4">
          <h1 className="font-regular font-bold text-2xl ">
            Gosto muito de itens para mesa home office e peças para pc, esses
            são alguns que uso diariamente !
          </h1>
          <h3 className="font-regular font-bold text-xl">
            Meus itens usados na minha mesa para estudo e trabalho !
          </h3>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="h-52 w-80 md:w-80 rounded-lg">
            <p className=" border-b-4 border-b-zinc-600 mb-2">
              Teclado Kumara Redragon TKL mecanico.
            </p>
            <img
              className="rounded-xl h-52 w-96"
              src={kumara}
              loading="lazy"
              height="300px"
              width="300px"
              alt="aplicacao lista de tarefas"
            />
          </div>
          <div className="h-52 w-80 md:w-80 rounded-lg my-4">
            <p className=" border-b-4 border-b-zinc-600 my-4">
              Teclado Redragon 60% mecanico
            </p>
            <img
              className="rounded-xl h-52 w-96"
              src={keyboard}
              loading="lazy"
              height="300px"
              width="300px"
              alt="aplicacao lista de tarefas"
            />
          </div>
          <div className="h-52 w-80 my-4 md:w-80 rounded-lg">
            <p className=" border-b-4 border-b-zinc-600 my-4">Mouse Rappo.</p>
            <img
              className="rounded-xl h-52 w-96"
              src={mouse}
              loading="lazy"
              height="300px"
              width="300px"
              alt="aplicacao lista de tarefas"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Setup;

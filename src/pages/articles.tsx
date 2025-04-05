import imageOne from "../pages/images/articles-one.png";
import imageTwo from "../pages/images/articles-two.png";
import imageTree from "../pages/images/articles-tree.png";
import { motion } from "framer-motion";

function Articles() {
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
      <section className="flex flex-col items-center gap-8 justify-evenly mt-5  md:flex-wrap lg:flex-wrap p-2 w-full md:flex-row max-w-[850px]">
        <div className="flex flex-col items-center w-full gap-4">
          <h1 className="font-regular font-bold text-2xl w-full text-center ">
            Artigos publicados durante toda minha trajetória como desenvolvedor web solo!
          </h1>
          <h3 className="font-regular font-bold text-xl">
            Artigos publicados!
          </h3>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="h-52 w-80 md:w-80 rounded-lg">

            <img
              className="rounded-xl h-52 w-96"
              src={imageOne}
              loading="lazy"
              height="300px"
              width="300px"
              alt="aplicacao lista de tarefas"
            />
          </div>
          <div className="h-52 w-80 md:w-80 rounded-lg my-4">
            <img
              className="rounded-xl h-52 w-96"
              src={imageTwo}
              loading="lazy"
              height="300px"
              width="300px"
              alt="aplicacao lista de tarefas"
            />
          </div>
          <div className="h-52 w-80 my-4 md:w-80 rounded-lg">
            <img
              className="rounded-xl h-52 w-96"
              src={imageTree}
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

export default Articles;

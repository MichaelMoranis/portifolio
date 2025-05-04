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
      <section className="w-full p-4 mx-auto mt-6 max-w-[850px]">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="font-bold text-2xl text-center">
            Minha seção de imagens amadoras usando uma Canon T6 Rebel EOS!
          </h1>
          <h3 className="text-center">
            Recentemente tenho me aventurado a praticar fazer algumas
            fotografias, percebi que tinha encontrado mais um novo hobbie, e
            desde entao tenho feito algumas imagens, espero que gostem !!!
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              src: street,
              title: "Paixão por fotos e imagens",
              alt: "Foto de rua",
            },
            {
              src: formig,
              title: "Elementos da natureza",
              alt: "Formiga na natureza",
            },
            {
              src: womam,
              title: "Engenharia e arquitetura",
              alt: "Mulher na arquitetura",
            },
            { src: forest, title: "Àrvores e plantas", alt: "Floresta" },
            {
              src: tableHome,
              title: "Decoração e itens para pc",
              alt: "Mesa de trabalho",
            },
          ].map((item, index) => (
            <div key={index} className="rounded-lg">
              <p className="border-b-4 border-b-zinc-600 mb-2">{item.title}</p>
              <img
                className="rounded-xl w-full h-auto aspect-square object-cover"
                src={item.src}
                loading="lazy"
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Images;

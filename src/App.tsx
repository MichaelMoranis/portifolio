import About from "./components/About";
import Articles from "./components/Articles";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Perfil from "./components/Perfil";
import WorkText from "./components/WorkText";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="box flex justify-center items-center m-auto w-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <section className="flex flex-col items-center justify-center m-auto md:mt-5 gap-6 mt-5 md:w-full lg:max-w-4xl p-4">
        <Banner />
        <Perfil />
        <About />
        <Button />
        <div className="flex flex-col items-center content-center justify-center w-full px-4">
          {/* <Work text="Bio" /> */}
          <WorkText
            yearStudent="1996"
            textWork="ano de nascimento em Barreiras BA."
          />
          <WorkText
            yearStudent="2019"
            textWork="Mudo para a cidade de Cascavel PR onde me interesso por programação em 2021 durante a pandemia!."
          />
          <WorkText
            textWork="Inicio da faculdade em análise e desenvolvimento de sistemas."
            yearStudent="2024"
          />
        </div>
        <Articles />
      </section>
    </motion.div>
  );
}

export default App;

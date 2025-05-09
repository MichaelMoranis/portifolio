import About from "./components/About";
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
        <About text="Michael é um desenvolvedor full-stack e freelancer morando em Cascavel
        PR. Com uma paixão para criar serviços digitais e coisas que ele deseja,
        em constante busca por lançamentos de produtos no mercado, desde o
        planejamento e design até a solução de problemas reais com código.<br />
        Quando não estou online, gosto de sair com minha câmera, ouvir musica,
        praticar meditação etc. Faço meu serviço como freela, entre em contato
        para conversarmos sobre negócios e fazer orçamentos!" />
        <Button />
        <div className="flex flex-col items-center content-center justify-center w-full px-4">
          <WorkText />
        </div>
      </section>
    </motion.div>
  );
}

export default App;

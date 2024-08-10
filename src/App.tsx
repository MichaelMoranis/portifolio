import Projects from "./components/Articles";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Perfil from "./components/Perfil";
import Work from "./components/Work";
import WorkText from "./components/WorkText";

function App() {
  return (
    <main className="flex flex-col items-center mx-auto w-full lg:max-w-4xl lg:w-screen">
      <Banner />
      <Work text="Perfil" />
      <Perfil />
      <WorkText textWork="Michael é um desenvolvedor full-stack e freelancer morando em Cascavel. Com uma paixão por criar serviços digitais/coisas que ele deseja, tem talento para tudo relaci.onado ao lançamento de produtos, desde o planejamento e design até a solução de problemas reais com código. Quando não estou online, gosto de sair com minha câmera, ouvir musica, sair com minha esposa entre outros hobbies. Faço meu serviço como freela, mas desejo ardentemente entrar no mercado de trabalho e lançar meu proprio produto!!" />
      <Button />
      <div className="flex flex-col justify-center items-center w-full">
        <Work text="Bio" />
        <WorkText
          yearStudent="1996"
          textWork="ano de nascimento em Barreiras BA."
        />
        <WorkText
          textWork="Inicio da faculdade em analise e desenvolvimento de sistemas"
          yearStudent="2024"
          yearDescription="Comeco da faculdade analise e desenvolvimento  de sistemas."
        />
      </div>
      <Projects />
    </main>
  );
}

export default App;

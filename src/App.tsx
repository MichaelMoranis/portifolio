import Articles from "./components/Articles";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Perfil from "./components/Perfil";
import WorkText from "./components/WorkText";

function App() {
  return (
    <main className={"flex flex-col items-center gap-6 justify-evenly mx-auto w-full lg:max-w-4xl px-4 font-regular"}>
      <Banner />
      <Perfil />
      <WorkText textWork="Michael é um desenvolvedor full-stack e freelancer morando em Cascavel PR. Com uma paixão para criar serviços digitais e coisas que ele deseja, em constante busca por lançamentos de produtos no mercado,  desde o planejamento e design até a solução de problemas reais com código. Quando não estou online, gosto de sair com minha câmera, ouvir musica, praticar meditação etc. Faço meu serviço como freela, entre em contato para conversarmos sobre negócios e fazer orçamentos!" />
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
    </main>
  );
}

export default App;

import Banner from "./components/Banner";
import Button from "./components/Button";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Work from "./components/Work/intex";
import WorkText from "./components/WorkText";

function App() {
  return (
    <main className="flex flex-col items-center justify-center m-auto">
        <Header />
        <Banner />
        <Perfil />
        <Work text="Perfil" />
        <WorkText textWork="Michael é um desenvolvedor full-stack e freelancer morando em Cascavel. Com uma paixão por criar serviços digitais/coisas que ele deseja, tem talento para tudo relacionado ao lançamento de produtos, desde o planejamento e design até a solução de problemas reais com código. Quando não estou online, gosto de sair com minha câmera, ouvir musica ficar, com meu gato, sair com minha esposa, faço meu serviço como freela, mas desejo ardemente entrar no mercado de trabalho e lançar meu proprio produto !!" />
        <Button />
        <Work text="Bio" />
        <WorkText yearStudent="1996" textWork="ano de nascimento em Barreiras BA." />
        <WorkText textWork="Inicio da faculdade em analise e desenvolvimento de sistemas" yearStudent="2024" yearDescription="Comeco da faculdade analise e desenvolvimento  de sistemas."/>
    </main>
  );
}

export default App;

import imagelist from "../assets/tarefa.jpeg";
import orcamentos from "../assets/orçamentos.jpg";
import imgBanner from "../assets/bannerWork.png"

function Works() {
  return (
    <div className="flex flex-col items-center justify-center w-96 gap-5 lg:max-w-4xl lg:w-screen text-zinc-300">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-64 mx-4 md:w-4/3 p-6">
          <img
            className="rounded-md"
            src={imgBanner}
            alt="imagem de mesa homeoffice"
          />
        </div>
      </div>
      <div>
        <p className="text-justify">
          Lista de projetos que tenho desenvolvido ao longo dos anos como
          desenvolvedor web !
        </p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row items-center justify-between w-full mx-4  sm:w-2/3 md:w-4/3">
        <a
          href="https://app-tarefa.vercel.app"
          target="_blank"
          className="h-52 w-96 my-4 md:w-80 rounded-lg"
        >
          <p className="text-zinc-300 border-b-4 border-b-zinc-600 mb-2">
            Projeto lista de tarefas
          </p>
          <img
            className="rounded-xl h-52 w-96"
            src={imagelist}
            alt="aplicacao lista de tarefas"
          />
        </a>
        <a
          href="https://pro-orcamentos.vercel.app/"
          className="h-52 w-96 my-4 md:w-80 rounded-lg"
        >
          <p className="text-zinc-300 border-b-4 border-b-zinc-600 mb-2">
            Projeto gerador de orçamentos
          </p>
          <img
            className="rounded-xl h-52 w-96"
            src={orcamentos}
            alt="mesa de trabalho"
          />
        </a>
      </section>
    </div>
  );
}

export default Works;
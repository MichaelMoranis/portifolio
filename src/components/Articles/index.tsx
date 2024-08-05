import article from '../../assets/artigo-capa.jpeg'
import tableHome from "../../assets/mesa-trabalho.jpg"


function Projects() {
    return (
        <section className="flex flex-col gap-4 md:flex-row items-center justify-between w-96 mx-4  sm:w-2/3 md:w-4/3">
            <a href='https://dev.to/michaelmoranis/desenvolvendo-minha-aplicacao-lista-de-tarefas-com-armazenamento-em-banco-de-dados--5ebn' target='_blank' className="h-44 w-56 my-4 md:w-80 rounded-lg">
                <p className="text-zinc-300 border-b-4 border-b-zinc-600 mb-2">Artigo Dev.To</p>
                <img className='rounded-xl h-44 w-80' src={article} alt="aplicacao lista de tarefas" />
            </a>
            <a className="h-44 w-56 my-4 md:w-80 rounded-lg">
                <p className="text-zinc-300 border-b-4 border-b-zinc-600 mb-2">Meu canto de trabalho.</p>
                <img className='rounded-xl h-44 w-80' src={tableHome} alt="mesa de trabalho" />
            </a>
        </section>
    )
}

export default Projects
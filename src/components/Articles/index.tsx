import article from '../../assets/artigo-capa.jpeg'
import tableHome from "../../assets/mesa-trabalho.jpg"


function Projects() {
    return (
        <section className="flex flex-col gap-4 md:flex-row items-center justify-between w-full mx-4  sm:w-2/3 md:w-4/3">
            <a href='https://dev.to/michaelmoranis/desenvolvendo-minha-aplicacao-lista-de-tarefas-com-armazenamento-em-banco-de-dados--5ebn' target='_blank' className="h-52 w-96 my-4 md:w-80 rounded-lg">
                <p className="text-zinc-300 border-b-4 border-b-zinc-600 mb-2">Paixão por fotos e imagens.</p>
                <img className='rounded-xl h-52 w-96' src={article} alt="aplicacao lista de tarefas" />
            </a>
            <a className="h-52 w-96 my-4 md:w-80 rounded-lg">
                <p className="text-zinc-300 border-b-4 border-b-zinc-600 mb-2">
                    Decoração e itens para pc.
                </p>
                <img className='rounded-xl h-52 w-96' src={tableHome} alt="mesa de trabalho" />
            </a>
        </section>
    )
}

export default Projects
import gifTodo from '../../assets/todo.jpg'
import orcamentoGif from "../../assets/mesa-trabalho.jpg"


function Projects() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between w-96 mx-4  sm:w-2/3 md:w-4/3">
            <a className="h-36 w-80 my-4 md:w-60 rounded-lg">
                <img className='rounded-xl h-40 w-80 ' src={gifTodo} alt="git todo list" />
            </a>
            <a className="bg-zinc-300 h-36 w-80 my-4 md:w-60 rounded-lg">
                <img className='rounded-xl h-40 w-80' src={orcamentoGif} alt="git todo list" />
            </a>
        </section>
    )
}

export default Projects
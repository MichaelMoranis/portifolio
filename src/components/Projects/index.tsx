import gifTodo from '../../assets/todo.jpg'
import tableHome from "../../assets/mesa-trabalho.jpg"


function Projects() {
    return (
        <section className="flex flex-col gap-4 md:flex-row items-center justify-between w-96 mx-4  sm:w-2/3 md:w-4/3">
            <a className="h-36 w-80 my-4 md:w-60 rounded-lg">
                <p className="text-zinc-300">Aplicacao lista de tarefas.</p>
                <img className='rounded-xl h-40 w-80 ' src={gifTodo} alt="aplicacao lista de tarefas" />
            </a>
            <a className="h-36 w-80 my-4 md:w-60 rounded-lg">
                <p className="text-zinc-300">Meu canto de trabalho.</p>
                <img className='rounded-xl h-40 w-80' src={tableHome} alt="mesa de trabalho" />
            </a>
        </section>
    )
}

export default Projects
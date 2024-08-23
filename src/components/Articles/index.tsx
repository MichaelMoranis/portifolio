import { Link } from 'react-router-dom'
import image from '../../assets/image.jpg'
import tableHome from "../../assets/mesa-trabalho.jpg"


function Articles() {
    return (
        <section className="flex flex-col items-center gap-5 justify-evenly md:flex-row md:w-full lg:max-w-4xl py-4">
            <Link to="/images" className="h-52 w-80 my-4 md:w-80 rounded-lg">
                <p className=" border-b-4 border-b-zinc-600 mb-2">Veja minhas fotos e imagens.</p>
                <img className='rounded-xl h-52 w-96' src={image} alt="aplicacao lista de tarefas" />
            </Link>
            <Link to="/setup" className="h-52 w-80 my-4 md:w-80 rounded-lg">
                <p className=" border-b-4 border-b-zinc-600 mb-2">
                    Decoração e itens para pc.
                </p>
                <img className='rounded-xl h-52 w-96' src={tableHome} alt="mesa de trabalho" />
            </Link>
        </section>
    )
}

export default Articles
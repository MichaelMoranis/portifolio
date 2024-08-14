import { Link } from 'react-router-dom'
import image from '../../assets/image.jpg'
import tableHome from "../../assets/mesa-trabalho.jpg"


function Articles() {
    return (
        <section className="flex flex-col items-center gap-5 justify-evenly mx-4 w-80 md:flex-row md:w-full lg:max-w-4xl p-4">
            <Link to="/images" target='_blank' className="h-52 w-80 my-4 md:w-80 rounded-lg">
                <p className=" border-b-4 border-b-zinc-600 mb-2">Paixão por fotos e imagens.</p>
                <img className='rounded-xl h-52 w-96' src={image} alt="aplicacao lista de tarefas" />
            </Link>
            <Link to="/computer" className="h-52 w-80 my-4 md:w-80 rounded-lg">
                <p className=" border-b-4 border-b-zinc-600 mb-2">
                    Decoração e itens para pc.
                </p>
                <img className='rounded-xl h-52 w-96' src={tableHome} alt="mesa de trabalho" />
            </Link>
        </section>
    )
}

export default Articles
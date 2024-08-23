import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button() {
    return (
        <Link to='/works' className="flex items-center justify-center gap-2 w-full md:w-2/3 bg-zinc-700 text-zinc-300 font-bold text-1xl p-1 rounded-lg border-2">
               Meus trabalhos
            <FaLocationArrow />
        </Link>
    )
}

export default Button
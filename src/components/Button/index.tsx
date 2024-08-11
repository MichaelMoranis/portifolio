import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button() {
    return (
        <button className="flex items-center justify-center gap-2 w-full bg-indigo-950 text-zinc-300 font-bold text-1xl p-1 rounded-lg border-2">
             <Link to="/works">
               Meus trabalhos
             </Link>
            <FaLocationArrow />
        </button>
    )
}

export default Button
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button() {
    return (
        <button className="flex items-center justify-center gap-2 p-2 m-4 w-4/5 bg-indigo-950 text-zinc-300 font-bold text-2xl rounded-lg border-2">
             <Link to="/works">
               Meus trabalhos
             </Link>
            <FaLocationArrow />
        </button>
    )
}

export default Button
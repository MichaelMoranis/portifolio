import { FaLocationArrow } from "react-icons/fa6";

function Button() {
    return (
        <button className="flex items-center justify-center gap-2 p-2 m-4 w-4/5 bg-indigo-950 text-zinc-300 font-bold text-2xl rounded-lg border-2">
             <a href="/works">
               Meus trabalhos
             </a>
            <FaLocationArrow />
        </button>
    )
}

export default Button
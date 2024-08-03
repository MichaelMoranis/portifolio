import { FaLocationArrow } from "react-icons/fa6";

function Button() {
    return (
        <button className="flex items-center gap-2 p-4 m-4 bg-indigo-950 text-zinc-300 font-bold text-2xl rounded-md border-2">
            meus trabalhos
            <FaLocationArrow />
        </button>
    )
}

export default Button
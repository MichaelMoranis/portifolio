import { FaPlus } from "react-icons/fa" 
import { FaCopy } from "react-icons/fa" 

export default function Outdoor() {
  return (
    <div className="flex flex-col justify-center w-full bg-zinc-900 items-center gap-4 my-4 p-4 rounded-md sm:w-full">
      <h3 className="text-2xl md:text-4xl">Vamos trabalhar juntos !!</h3>
      <p className="text-xl flex-wrap md:text-2xl text-center">Criação de experiência do usuário e design visual atraente</p>
      <div className="flex flex-row gap-4">
        <div>
            <button className="flex flex-row gap-2  items-center bg-zinc-900 text-center p-2 rounded-md">
                <FaPlus />
                contate-me
            </button>
        </div>
        <div>
            <button className="flex flex-row gap-2 bg-zinc-900 items-center text-center p-2 rounded-md">
                <FaCopy />
                envie um email
            </button>
        </div>
      </div>
    </div>
  );
}

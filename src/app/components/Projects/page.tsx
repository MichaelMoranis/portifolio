import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Works from "../Works/page";

export default function Projects() {
  return (
    <div className="w-full bg-zinc-800 rounded-md">
      <div className="flex items-center justify-between p-4 rounded-md">
        <div>Projetos</div>
        <div>
          <button className="flex items-center gap-2 bg-zinc-700 p-2 rounded-md">
            ver todos
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>
      <Works />
    </div>
  );
}

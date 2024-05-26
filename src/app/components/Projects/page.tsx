import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Cards from "../Cards/page";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="px-4 bg-zinc-800 w-96 justify-center rounded-md">
      <div className="flex items-center justify-between p-2 rounded-md">
        <div>Projetos</div>
        <div>
          <button className="flex gap-2 bg-zinc-700 p-2 rounded-md">
            <Link href={"components/Works"}>
            ver todos
            </Link>
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>
      <div className="m-1">
      <Cards />
      </div>
    </div>
  );
}

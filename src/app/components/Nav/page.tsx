import { CgEditBlackPoint } from "react-icons/cg";

export default function Nav() {
  return (
    <nav className="w-full sm:m-auto">
      <ul className="flex items-center justify-between p-4">
        <li>desenvolvedor web</li>
        <li className="flex items-center justify-center gap-2">
          <CgEditBlackPoint className="bg-indigo-600 rounded-full" />
          <p className="hidden md:block bg-indigo-500 rounded-full px-1">avalie meu trabalho </p>
        </li>
      </ul>
    </nav>
  );
}

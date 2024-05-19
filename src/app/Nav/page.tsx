import { CgEditBlackPoint } from "react-icons/cg";

export default function Nav() {
  return (
    <nav className="w-full">
      <ul className="flex items-center justify-between p-4">
        <li>desenvolvedor web</li>
        <li className="flex items-center justify-center gap-2">
          <CgEditBlackPoint className="bg-indigo-600 rounded-full" />
          <p className="hidden md:block">works</p>
        </li>
      </ul>
    </nav>
  );
}

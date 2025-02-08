import { Link } from "react-router-dom";

// Componente para os itens de navegação
export const NavItem = ({ to, label, icon }: { to: string; label: string; icon: string }) => (
  <li>
    <Link
      to={to}
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-800 transition"
    >
      <img src={icon} alt={label} className="w-6 h-6" />
      <span className="text-lg">{label}</span>
    </Link>
  </li>
);
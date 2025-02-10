import { Link } from "react-router-dom";

// Componente para os itens de navegação
export const NavItem = ({ to, label, icon, onClose }: { to: string; label: string; icon: string, onClose: () => void }) => (
  <li>
    <Link
      to={to}
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-800 transition"
    >
      <img src={icon} alt={label} className="w-8 h-8" />
      <span onClick={onClose} className="text-lg">{label}</span>
    </Link>
  </li>
);
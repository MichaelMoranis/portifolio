import { Link } from "react-router-dom";

// Componente para os itens de navegação
export const NavItem = ({ to, label, icon, onClose }: { to: string; label: string; icon: string, onClose: () => void }) => (
  <li>
    <Link
      to={to}
      className="group flex items-center gap-4 px-4 py-3 rounded-xl border border-white/10
        bg-white/[0.03] hover:bg-white/10 hover:border-white/20
        transition-all duration-200"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10
        group-hover:bg-white/10 group-hover:border-white/20 transition">
        <img src={icon} alt={label} className="w-6 h-6" />
      </span>
      <span onClick={onClose} className="text-base font-medium tracking-wide text-white/90 group-hover:text-white">
        {label}
      </span>
    </Link>
  </li>
);
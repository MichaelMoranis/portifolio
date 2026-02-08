export const SocialIcon = ({ link, icon, alt }: { link: string; icon: string; alt: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-11 w-11 items-center justify-center rounded-full
      bg-white/5 border border-white/10
      hover:bg-white/10 hover:border-white/20
      transition-all duration-200"
  >
    <img src={icon} alt={alt} className="w-5 h-5 opacity-90 group-hover:opacity-100" />
  </a>
);
export const SocialIcon = ({ link, icon, alt }: { link: string; icon: string; alt: string }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
      <img src={icon} alt={alt} className="w-6 h-6" />
    </a>
  );
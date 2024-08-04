import sunIcon from "../../assets/sun.png"
import burguerMenu from "../../assets/hambuger.png"


function Header() {
  return (
    <header className="flex items-center justify-center w-full  rounded-xl">
      <div className="p-1 flex w-full justify-between items-center m-2">
        <div>
          <h1 className="text-zinc-300 font-bold text-2xl">moranisdev</h1>
        </div>
        <ul className="gap-4 text-zinc-300 font-bold text-2xl hidden sm:flex justify-between">
          <li className="hover:underline">trabalhos</li>
          <li className="hover:underline">posts</li>
          <li className="hover:underline">sobre</li>
        </ul>
        <nav>
          <ul className="flex gap-4 items-center justify-between">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <img src={sunIcon} className="h-8 w-8 md:w-12 md:h-12 bg-zinc-300 rounded-full" />
              </a> 
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                 <img src={burguerMenu} className="h-8 w-8 md:w-12 md:h-12 bg-zinc-300 rounded-full" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

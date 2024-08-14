import sunIcon from "../../assets/sun.png";
import burguerMenu from "../../assets/hambuger.png";
import { Link } from "react-router-dom";


function Header() {


  return (
    <header className="flex items-center justify-center w-full rounded-xl">
      <div className="flex w-full justify-between items-center my-1">
        <div>
          <h1 className="text-zinc-300 font-bold text-2xl hover:underline">
            <Link to="/">moranesdev</Link>
          </h1>
        </div>
        <ul className="gap-4 text-zinc-300 font-bold text-2xl hidden sm:flex justify-between">
          <li className="hover:underline">posts</li>
          <li className="hover:underline">
            <Link to="/works">jobs</Link>
          </li>
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
                <img
                  src={sunIcon}
                  className="h-8 w-8 md:w-12 md:h-12 bg-zinc-300 rounded-full"
                />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <img
                  src={burguerMenu}
                  className="h-8 w-8 md:w-12 md:h-12 bg-zinc-300 rounded-full"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";

function Header() {
  return (
    <header className="m-auto items-center max-w-screen-md rounded-xl">
      <div className="mx-6 p-1 flex justify-between items-center ">
        <h1 className="text-white">moranisdev</h1>
        <div className="gap-4 text-white hidden sm:flex justify-between">
          <p className="hover:underline">trabalhos</p>
          <p className="hover:underline">posts</p>
          <p className="hover:underline">sobre</p>
        </div>
        <nav>
          <ul className="flex gap-12 items-center justify-between">
            <div className="flex gap-4">
              <li className="">
                <a
                  href="https://instagram.com/moranesdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white h-18 w-12"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithubAlt className="h-6 w-6"/>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <SiLinkedin className="h-6 w-6" />
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

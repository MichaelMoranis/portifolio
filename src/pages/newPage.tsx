import { Link } from "react-router-dom";
import Perfil from "../components/Perfil";

function NewPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mx-auto w-full lg:max-w-4xl lg:w-screen">
      <Perfil />
      sou a nova pagina
      <Link to="/">perfil</Link>
    </div>
  );
}

export default NewPage;

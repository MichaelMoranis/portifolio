import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}



export default function ErrorPage() {

  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div className="text-red-500" id="error-page">
      <h1>Oops!</h1>
      <p className="text-red-500">Desculpe, ocorreu algum erro inesperado!!!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

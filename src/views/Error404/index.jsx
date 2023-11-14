import { useRouteError } from "react-router-dom";
const Error404 = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>{error.status} Oops! no encontramos la pagina que buscas!</h1>
      <p>{error.data}</p>
    </>
  );
};

export default Error404;

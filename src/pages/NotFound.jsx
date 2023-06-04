import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>404</h2>

      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </>
  );
};

export default NotFound;

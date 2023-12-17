import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <div id="error-page">
        <h1>Oops !</h1>
        <p>Sorry an unexpected error has occured.</p>
        <i>{error.statusText || error.message}</i>
        <Link to="/">
          <button className="btn">Go to HomePage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

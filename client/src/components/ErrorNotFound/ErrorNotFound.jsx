import { NavLink } from "react-router-dom";


const ErrorNotFound = () => {
 
  return (
    <div>
      <div>ERROR 404</div>
      <div>The page you want to acces are missing !</div>
      <NavLink to="/home">
        <button>BACK HOME</button>
      </NavLink>
    </div>
  );
};

export default ErrorNotFound;

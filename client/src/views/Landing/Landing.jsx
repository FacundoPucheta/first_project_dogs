import { NavLink } from "react-router-dom";
import style from "../Landing/Landing.module.css";


const Landing = () => {

  return (
    <div className={style.mainContainer}>
      <h1>Esta es la vista de Landing</h1>
      <NavLink to="/home" style={{ color: "white" }}>
        ENTRAR A LA PAGINA
      </NavLink>
    </div>
  );
};

export default Landing;

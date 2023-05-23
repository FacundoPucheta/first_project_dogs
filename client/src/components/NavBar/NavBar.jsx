import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

  
  return (
    <div>

      <header> DOG API </header>
      <div className={style.mainCointeiner}>
        <Link to="/home" style={{ color: "red" }}>HOME</Link>
        <Link to="/" style={{ color: "red" }}>EXIT</Link>
      </div>

    </div>
  );
};

export default NavBar;

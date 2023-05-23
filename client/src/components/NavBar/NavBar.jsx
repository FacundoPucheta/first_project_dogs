import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

  const location = useLocation().pathname;

  return (
    <div className={style.mainCointeiner}>
        
        <Link to="/home" style={{color: "red"}} >HOME</Link>
        {!location.includes("detail") && <Link to="/create" style={{color: "red"}}>CREATE!</Link>}
        <Link to="/" style={{color: "red"}}>EXIT</Link>
    </div>
  )

};

export default NavBar;

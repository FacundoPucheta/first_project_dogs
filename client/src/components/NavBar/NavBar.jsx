import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainCointeiner}>

        <Link to="/home" style={{color: "red"}} >HOME</Link>
        <Link to="/detail" style={{color: "red"}}>DETAIL</Link>
        <Link to="/create" style={{color: "red"}}>FORM</Link>
        <Link to="/" style={{color: "red"}}>EXIT</Link>
    </div>
  )

};

export default NavBar;

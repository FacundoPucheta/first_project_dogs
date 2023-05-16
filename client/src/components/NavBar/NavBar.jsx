import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainCointeiner}>

        <Link to="/home" style={{color: "whitesmoke"}} >HOME</Link>
        <Link to="/detail" style={{color: "whitesmoke"}}>DETAIL</Link>
        <Link to="/create" style={{color: "whitesmoke"}}>FORM</Link>
        <Link to="/" style={{color: "whitesmoke"}}>EXIT</Link>
    </div>
  )

};

export default NavBar;

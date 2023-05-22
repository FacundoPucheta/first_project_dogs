import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
// import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={style.mainCointeiner}>
        {/* <SearchBar /> */}
        <Link to="/home" style={{color: "red"}} >HOME</Link>
        <Link to="/create" style={{color: "red"}}>FORM</Link>
        <Link to="/" style={{color: "red"}}>EXIT</Link>
    </div>
  )

};

export default NavBar;

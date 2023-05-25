import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { resetDog, toLastNumPage } from "../../redux/actions";

const NavBar = () => {

  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(toLastNumPage(1));
    dispatch(resetDog());
  };
  
  return (
    <div>

      <header> 
      <span>🐾</span>
      <span>🐾</span>
      <span>🐾</span>
      <span>🐾</span>
      
      <span>🐾</span>
      <span>🐾</span>
      <span>🐾</span>
      <span>🐾</span>
       </header>
      <div className={style.mainCointeiner}>
        <NavLink to="/home" style={{ color: "red" }}>HOME</NavLink>
        <NavLink to="/" onClick={()=>handleExit()} style={{ color: "red" }}>EXIT</NavLink>
      </div>

    </div>
  );
};

export default NavBar;

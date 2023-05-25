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

      <header className={style.header}> 
      <span>🐾</span>
      <span>🐾</span>
      <span>🐾</span>
      <span>🐾</span>
      
      <span>🐾</span>
      <span>🐾</span>
      <span>🐾</span>
      <span>🐾</span>
       </header>
      <div className={style.conteiner1}>
        <NavLink to="/home" >About..</NavLink>
        <div className={style.exitBtn}>
        <NavLink to="/" onClick={()=>handleExit()} >EXIT</NavLink>
        </div>
      </div>

    </div>
  );
};

export default NavBar;

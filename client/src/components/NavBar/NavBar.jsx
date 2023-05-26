import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resetDog, toLastNumPage } from "../../redux/actions";

const NavBar = () => {
  
  const numPage = useSelector(state => state.numPage);
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(toLastNumPage(1));
    dispatch(resetDog());
  };
  const handleAbout = () => {
    dispatch(toLastNumPage(numPage));
    
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
        <NavLink to="/about" onClick={()=>handleAbout()}>About..</NavLink>
        <div className={style.exitBtn}>
        <NavLink to="/" onClick={()=>handleExit()} >EXIT</NavLink>
        </div>
      </div>

    </div>
  );
};

export default NavBar;

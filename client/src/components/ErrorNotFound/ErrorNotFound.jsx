import { NavLink } from "react-router-dom";
import styles from "./ErrorNotFound.module.css";

// Falta generar acciones para borrar paginado / estados.


const ErrorNotFound = () => {
 
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorTitle}>ERROR 404</div>
      <div className={styles.errorMessage}>The page you want to acces are missing !</div>
      <NavLink to="/home">
        <button className={styles.backBtn} >BACK HOME</button>
      </NavLink>
    </div>
  );
};

export default ErrorNotFound;

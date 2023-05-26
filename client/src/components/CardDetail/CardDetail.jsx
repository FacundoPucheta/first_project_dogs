import { useDispatch } from "react-redux";
import { backHome } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import styles from "./CardDetail.module.css";

const CardDetail = (props) => {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(backHome());
  };

  return (

    <div className={styles.mainContainer}>
      
        <div className={styles.mainLeft}>
        <h2>Id: {props.id}</h2>
        <img src={props.image} alt={props.id} />
        <h2>Name: {props.name}</h2>
        </div>
        <br></br>
        <div className={styles.mainRight}>
        <div>
        <h3>Height: {props.height} m</h3>
        <h3>Weight: {props.weight} kg</h3>
        <h3>Temperament: {props.temperament}</h3>
        <h3>Life span: {props.life_span}</h3>
        </div>
      
      <NavLink className={styles.backBtn} to="/home" onClick={() => handleBack()}>
        BACK
      </NavLink>
      </div>
    </div>
  );
  
};

export default CardDetail;

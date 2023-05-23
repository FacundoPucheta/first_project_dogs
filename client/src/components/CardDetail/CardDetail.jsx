// import style from "./CardDetail.module.css";


import { useDispatch, useSelector } from "react-redux";
import { backHome } from "../../redux/actions";
import { NavLink } from "react-router-dom";


const CardDetail = (props) => {
  
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(backHome());
  };


  return (
    <div>
      <div>
        <h2>Id: {props.id}</h2>
        <img src={props.image} alt={props.id} />
        <h2>Name: {props.name}</h2>
        <h3>Height: {props.height} m</h3>
        <h3>Weight: {props.weight} kg</h3>
        <h3>Temperament: {props.temperament}</h3>
        <h3>Life span: {props.life_span}</h3>
      </div>
      <NavLink to="/home" onClick={()=>handleBack()}>BACK</NavLink>
    </div>
  );
};

export default CardDetail;

import { Link}  from "react-router-dom";
import style from "./DogCard.module.css";

const DogCard = (props) => {


    return (
      <div className={style.card}>
        <img src={props.image} alt={props.name}/>
        <Link to={`/detail/${props.id}`}>
        <h3>Name:  "{props.name}"</h3>
          </Link>
        <p>Temperament: {props.temperament}</p>
        <p>Weight: {props.weight} kg</p>

      </div>
    )
  
  };
  
  export default DogCard;
import style from "./DogCard.module.css";
import { useDispatch } from "react-redux";
import { resetDog } from "../../redux/actions";
import { Link } from "react-router-dom";

const DogCard = (props) => {
  const dispatch = useDispatch();

  const handleDetail = () => {
    dispatch(resetDog());
  };

  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <img src={props.image} alt={props.name} />
      </div>
      
      <Link to={`/detail/${props.id}`} onClick={() => handleDetail()}>
        <h3>"{props.name}"</h3>
      </Link>

      <p>Temperament: {props.temperament}</p>
      <p>Weight: {props.weight} kg</p>
    </div>
  );
};

export default DogCard;

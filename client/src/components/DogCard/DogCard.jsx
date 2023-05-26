import style from "./DogCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resetDog, toLastNumPage } from "../../redux/actions";
import { Link } from "react-router-dom";

const DogCard = (props) => {

  const numPage = useSelector(state => state.numPage);
  const dispatch = useDispatch();

  const handleDetail = () => {
    dispatch(toLastNumPage(numPage));
    dispatch(resetDog());
    console.log(numPage)
  };

  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <img src={props.image} alt={props.name} />
      </div>
      
      <Link className={style.link} to={`/detail/${props.id}`} onClick={() => handleDetail()}>
        <h2>"{props.name}"</h2>
      </Link>
    
      <div className={style.description}>
      <div className={style.descriptionTemper}>Temperament</div>
      <div>{props.temperament}</div>
      </div>
      <p>Weight: {props.weight} kg</p>
    
    </div>
  );
};

export default DogCard;

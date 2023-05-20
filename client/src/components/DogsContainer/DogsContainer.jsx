import DogCard from "../DogCard/DogCard";
import style from "./DogsContainer.module.css";

const DogsContainer = (props) => {
  const defaultImg =
    "https://img.ecartelera.com/noticias/fotos/24800/24860/5.jpg";
  // const { dogs } = useSelector((state) => state.dogs);

  return (
    <div>
            <div>
              <h3>Pagina {props.currentPage + 1}</h3>
              <button onClick={props.firstPHandler}>First </button>
              <button onClick={props.prevHandler}>Prev </button>
              <button onClick={props.nextHandler}>Next </button>
              <button onClick={props.lastPHandler}>Last  </button>
            </div>
      <div className={style.container}>
        {props.breeds.map((dog) => {
          return (
            <DogCard
            key={dog.id}
            id={dog.id}
            image={dog.image !== "" ? dog.image : defaultImg}
            name={dog.name}
            weight={dog.weight}
              temperament={dog.temperament}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DogsContainer;

import DogCard from "../DogCard/DogCard";
import style from "./DogsContainer.module.css";

const DogsContainer = (props) => {
  const defaultImg =
    "https://img.ecartelera.com/noticias/fotos/24800/24860/5.jpg";
  // const { dogs } = useSelector((state) => state.dogs);

  return (
    <div>
      <div>
        <h1>Pagina {props.currentPage}</h1>
        <button onClick={props.prevHandler}>Prev </button>
        <button onClick={props.nextHandler}>Next </button>
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

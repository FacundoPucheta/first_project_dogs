import DogCard from "../DogCard/DogCard";
import style from "./DogsContainer.module.css";
import { useSelector } from "react-redux";

const DogsContainer = () => {

  const defaultImg = "https://img.ecartelera.com/noticias/fotos/24800/24860/5.jpg";
  const {dogs} = useSelector((state) => state.dogs);

  return (
    <div className={style.container}>
      {dogs?.map((dog) => {
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
  );
};

export default DogsContainer;

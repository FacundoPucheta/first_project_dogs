import DogCard from "../DogCard/DogCard";
import style from "./DogsContainer.module.css";
import { useSelector } from "react-redux";

const DogsContainer = () => {
  const {dogs} = useSelector((state) => state.dogs);
  console.log(dogs);
  return (
    <div className={style.container}>
      {dogs?.map((dog) => {
        return (
          <DogCard
            id={dog.id}
            image={dog.image}
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

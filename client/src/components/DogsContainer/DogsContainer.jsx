import DogCard from "../DogCard/DogCard";
import style from "./DogsContainer.module.css";
import { useSelector } from "react-redux";


const DogsContainer = () => {

    const dogs = useSelector(state => state.dogs);

    return (
      <div className={style.container}>
        <p>Debe tomar un array de perros, recorrerlo y por c/u colocar un componente DogCard</p>
        {dogs.map(dog => {
            return  <DogCard
             id={dog.id}
             image={dog.image}
             name={dog.name}
             minWeight={dog.weight.split("-")[0]?.trim()}
             maxWeight={dog.weight.includes("-") ? dog.weight.split("-")[1]?.trim() : dog.weight}
             minHeight={dog.height.split("-")[0]?.trim()}
             maxHeight={dog.height.includes("-") ? dog.height.split("-")[1]?.trim() : dog.height}
             life_span={dog.life_span}
             temperament={dog.temperament}
             />
        })}
      </div>
    )
  
  };
  
  export default DogsContainer;
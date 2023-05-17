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
             weight={dog.weight}
             temperament={dog.temperament}
             />
        })}
      </div>
    )
  
  };
  
  export default DogsContainer;
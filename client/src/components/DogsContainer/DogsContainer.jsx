import style from "./DogsContainer.module.css";
import DogCard from "../DogCard/DogCard";
import Paginate from "../Paginate/Paginate";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const errorImage= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnkcW5ezogdx5ztSElyK3hLPlqFUqkMzthMLL33ehArDpO9X3U2yK5NReuFb4Wnhq9aQ&usqp=CAU";
const defaultImg =
  "https://img.ecartelera.com/noticias/fotos/24800/24860/5.jpg";

const DogsContainer = () => {
  const DOGS_TO_RENDER = 8;
  const  {dogs}  = useSelector((state) => state);
  const { numPage } = useSelector((state) => state);
  

  const [copyDogs, setCopyDogs] = useState([]);

  let firstIndex = (numPage - 1) * DOGS_TO_RENDER;
  let lastIndex = numPage * DOGS_TO_RENDER;
  let cantPages = Math.ceil(dogs?.length / 8);
  
  useEffect(() => {
    if(Array.isArray(dogs)){
      setCopyDogs(dogs); 
    }
  }, [dogs, numPage]);
  
  let viewDogs = copyDogs?.slice(firstIndex, lastIndex );
  
  
  if(!Array.isArray(viewDogs)) return <span>{copyDogs}</span>
  
    return (viewDogs && viewDogs?.length > 0) ? (
      <div>
        
        <Paginate cantPages={cantPages} />

        <div className={style.container}>
          {viewDogs?.map((dog) => (
            <DogCard
              key={dog.id}
              id={dog.id}
              image={dog.image !== "" ? dog.image : defaultImg}
              name={dog.name}
              weight={dog.weight}
              temperament={dog.temperament}
            />
          ))}
        </div>
      </div>
    ) : (
      <>
      <div>Oops..!</div>
      <p> - Dog's not found -</p>
      <img src={errorImage} alt="error" />
      </>
    );
  
};

export default DogsContainer;

import style from "./DogsContainer.module.css";
import { useEffect, useState } from "react";
import DogCard from "../DogCard/DogCard";
import { useSelector } from "react-redux";
import Paginate from "../Paginate/Paginate";

const defaultImg =
  "https://img.ecartelera.com/noticias/fotos/24800/24860/5.jpg";

const DogsContainer = () => {
//   const DOGS_TO_RENDER = 8;

//   const [currentPage, setCurrentPage] = useState(1);
//   const [copyDogs, setCopyDogs] = useState([]);

//   useEffect( () => {
//     setCopyDogs(dogs);
//   }, [dogs]
//   )
  
  

  
//   const lastIndex = currentPage * DOGS_TO_RENDER;
//   const firstIndex = lastIndex - DOGS_TO_RENDER;
//   const breeds = copyDogs?.slice(firstIndex, lastIndex);

  
  
//   const firstPHandler = () => {
//     setCurrentPage(1);
//   };

  
//   const lastPHandler = () => {
//     if(copyDogs.length === 0) return
//     const maxPages = Math.ceil(copyDogs.length / DOGS_TO_RENDER);
//     setCurrentPage(maxPages);
//   };

  
//   const prevHandler = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
  
//   const nextHandler = () => {
//     if (breeds.length === DOGS_TO_RENDER) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

const DOGS_TO_RENDER = 8;
const {dogs} = useSelector(state => state.dogs);
const {numPage} = useSelector(state => state);
let firstIndex = (numPage -1) * DOGS_TO_RENDER;
let lastIndex = numPage * DOGS_TO_RENDER;
let cantPages = Math.ceil(dogs?.length / 8);


// if (!Array.isArray(dogs)) dogs = [];
// const [copyDogs, setCopyDogs] = useState(dogs);
let viewDogs = dogs?.slice(firstIndex, lastIndex );

// useEffect(()=>{
//   setCopyDogs(dogs)
// }, [dogs])

  return dogs?.length === 0
  ? (<div>Loading...</div>) 
  : (
    <div>
      <Paginate cantPages={cantPages}/>
      {/* <div>
        <h3>Página {currentPage}</h3>
        <button onClick={firstPHandler}>First </button>
        <button onClick={prevHandler}>Prev </button>
        <button onClick={nextHandler}>Next </button>
        <button onClick={lastPHandler}>Last </button>
      </div> */}
      
      <div className={style.container}>
        {viewDogs?.map((dog) => {
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

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllDogs } from "../../redux/actions";
import DogsContainer from "../../components/DogsContainer/DogsContainer";

const DOGS_TO_RENDER = 8;
//AGREGAR AL PAGINADO __> TO THE LAST __> TO THE START
const Home = () => {
  const dispatch = useDispatch();
  let { dogs } = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);
  
  
  useEffect(() => {
    if (Array.isArray(dogs) || dogs.length > 0) setBreeds([...dogs]?.splice(0, DOGS_TO_RENDER));
  }, [dogs]);
  
  if (!Array.isArray(dogs)) dogs = [];
  
  const [breeds, setBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  
  
  const firstPHandler = () => {
    if (currentPage === 0) return;
    setBreeds([...dogs]?.splice(0, DOGS_TO_RENDER))
    setCurrentPage(0)
  };
  
  const lastPHandler = () => {
    const dogsNumber = [...dogs].length;
    const lastP = Math.ceil(dogsNumber / DOGS_TO_RENDER) - 1;
    const firstIndex = lastP * DOGS_TO_RENDER;
    const lastIndex = firstIndex + DOGS_TO_RENDER
    setBreeds([...dogs]?.splice(firstIndex, lastIndex));
    setCurrentPage(lastP);
  };

  const prevHandler = () => {
    if (currentPage === 0) return;
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * DOGS_TO_RENDER;

    setBreeds([...dogs]?.splice(firstIndex, DOGS_TO_RENDER));
    setCurrentPage(prevPage);
  };

  const nextHandler = () => {
    const dogsNumber = [...dogs].length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * DOGS_TO_RENDER;
    
    if(firstIndex >= dogsNumber) return;

    setBreeds([...dogs]?.splice(firstIndex, DOGS_TO_RENDER));
    setCurrentPage(nextPage);
  };

  return !Array.isArray(dogs) || dogs.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>Esta es la vista de Home</h1>
      <DogsContainer
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        firstPHandler={firstPHandler}
        lastPHandler={lastPHandler}
        breeds={breeds}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;

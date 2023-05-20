import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllDogs } from "../../redux/actions";
import DogsContainer from "../../components/DogsContainer/DogsContainer";

const DOGS_RENDER = 8;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);
  
  let { dogs } = useSelector((state) => state.dogs);
  
  useEffect(() => {
    if (Array.isArray(dogs) || dogs.length > 0) setBreeds([...dogs]?.splice(0, DOGS_RENDER));
  }, [dogs]);
  
  if (!Array.isArray(dogs)) dogs = [];
  
  
  const [breeds, setBreeds] = useState([...dogs]?.splice(0, DOGS_RENDER));
  const [currentPage, setCurrentPage] = useState(0);

  const prevHandler = () => {
    if (currentPage === 0) return;
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * DOGS_RENDER;

    setBreeds([...dogs]?.splice(firstIndex, DOGS_RENDER));
    setCurrentPage(prevPage);
  };

  const nextHandler = () => {
    const dogsNumber = [...dogs].length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * DOGS_RENDER;
    
    if(firstIndex >= dogsNumber) return;

    setBreeds([...dogs]?.splice(firstIndex, DOGS_RENDER));
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
        breeds={breeds}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;

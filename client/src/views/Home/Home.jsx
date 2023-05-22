import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllDogs } from "../../redux/actions";
import DogsContainer from "../../components/DogsContainer/DogsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";

//AGREGAR AL PAGINADO __> TO THE LAST __> TO THE START
const Home = () => {
  const dispatch = useDispatch();
  


  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getAllDogs());
  };

// if (!Array.isArray(dogs)) dogs = [];
  return (
  
    <div>
      <h1>Esta es la vista de Home</h1>
      <SearchBar />
      <button onClick={handleClick}>Get All :) </button>
      <DogsContainer />
    </div>
  );
};

export default Home;

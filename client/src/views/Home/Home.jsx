import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllDogs, getAllTemper } from "../../redux/actions";
import DogsContainer from "../../components/DogsContainer/DogsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";



const Home = () => {
  const dispatch = useDispatch();
  


  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemper());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getAllDogs());
  };


  return (
  
    <div>
      <Filters />
      <h1>Esta es la vista de Home</h1>
      <SearchBar />
      <button onClick={handleClick}>Get All :) </button>
      <DogsContainer />
    </div>
  );
};

export default Home;

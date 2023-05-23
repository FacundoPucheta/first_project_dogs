import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDogs, getAllTemper } from "../../redux/actions";
import DogsContainer from "../../components/DogsContainer/DogsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <h1>Esta es la vista de Home</h1>
      <Filters />
      <button onClick={() => navigate("/create")} style={{ color: "red" }}>CREATE!</button>

      <div>
      <SearchBar />
      <button onClick={handleClick}>Get All :) </button>
      </div>
      
      <DogsContainer />
    </div>
    
  );
};

export default Home;

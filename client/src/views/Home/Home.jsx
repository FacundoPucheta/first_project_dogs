import DogsContainer from "../../components/DogsContainer/DogsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../../redux/actions";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllDogs());
  },[dispatch])



  return (
    <>
      <h1>Esta es la vista de Home</h1>
      <DogsContainer />
    </>
  );
};

export default Home;

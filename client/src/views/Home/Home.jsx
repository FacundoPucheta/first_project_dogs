import DogsContainer from "../../components/DogsContainer/DogsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/actions";


const Home = () => {

  const dispatch = useDispatch();
  const {dogs} = useSelector((state) => state.dogs);

  useEffect(()=> {
    dispatch(getAllDogs());
  },[dispatch])



  return (
    <>
      <h1>Esta es la vista de Home</h1>
      {!dogs ? <div>Loading..</div> : <DogsContainer />}
      
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../redux/actions";

const useDogs = () => {
  const dispatch = useDispatch();
  const dogs = useState((state) => state.dogs);

  useEffect(() => {
    dispatch(getAllDogs());
  }, []);

  return dogs;
};

export default useDogs;


// custom Hooks. En teoría podrías usarlos en los componentes para ahorrarte todo este quilombito y mejorar/aplicar el concepto de responsabilidad única
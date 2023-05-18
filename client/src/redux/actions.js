import axios from "axios";
import { GET_ALL_DOGS, GET_ID_DOG, RESET_DOG } from "./action-types";
const REQ_DOGS = "http://localhost:3001/dogs";
// const REQ_TEMPER = "http://localhost:3001/temperaments";

export const getAllDogs = () => {
  return async (dispatch) => {
    const allDogs = await axios.get(`${REQ_DOGS}`);
    const dogs = allDogs.data;
    dispatch({ type: GET_ALL_DOGS, payload: { dogs } });
  };
};

export const getDogById = (id) => {
  return async (dispatch) => {
    const allDogs = await axios.get(`${REQ_DOGS}/${id}`);
    const dog = allDogs.data;
    dispatch({ type: GET_ID_DOG, payload: dog });
  };
};

export const resetDog = () => {
  return (dispatch) => {
    dispatch({ type: RESET_DOG });
  };
};

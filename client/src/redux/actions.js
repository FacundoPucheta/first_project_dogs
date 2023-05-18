import axios from "axios";
import { GET_ALL_DOGS, GET_ID_DOG, RESET_DOG, CREATE_DOG, GET_TEMPER } from "./action-types";
const REQ_DOGS = "http://localhost:3001/dogs";
const REQ_TEMPER = "http://localhost:3001/temperaments";

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

export const createDog = ({image, name, weight, height, life_span, temperament}) => {
  return async (dispatch) => {
    const allDogs = await axios.post(`${REQ_DOGS}`, ({image, name, weight, height, life_span, temperament}));
    const newDog = allDogs.data;
    dispatch({ type: CREATE_DOG, payload: newDog });
  };
};

export const getAllTemper = () => {
  return async (dispatch) => {
    const allTemper = await axios.get(`${REQ_TEMPER}/`);
    const temper = allTemper.data;
    dispatch({ type: GET_TEMPER, payload: temper });
  };
};

export const resetDog = () => {
  return (dispatch) => {
    dispatch({ type: RESET_DOG });
  };
};

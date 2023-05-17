import axios from "axios";
import { GET_ALL_DOGS } from "./action-types";
const REQ_DOGS = "http://localhost:3001/dogs";
// const REQ_TEMPER = "http://localhost:3001/temperaments";

export const getAllDogs = () => {
  return async (dispatch) => {
    const allDogs = await axios.get(`${REQ_DOGS}`);
    const dogs = allDogs.data;
    dispatch({ type: GET_ALL_DOGS, payload: { dogs } });
  };
};

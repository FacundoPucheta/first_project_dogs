import {
  GET_ALL_DOGS,
  BACK_HOME,
  GET_ID_DOG,
  GET_NAME_DOG,
  RESET_DOG,
  CREATE_DOG,
  GET_TEMPER,
  NEXT_PAGE,
  PREV_PAGE,
  FIRST_PAGE,
  LAST_PAGE,
  FILTER_TEMPER,
  FILTER_SOURCE,
  ORDER_NAME,
  ORDER_WEIGHT,
  SET_ERROR,
} from "./action-types";
import axios from "axios";

const REQ_DOGS = "http://localhost:3001/dogs";
const REQ_TEMPER = "http://localhost:3001/temperaments";

export const getAllDogs = () => {
  return async (dispatch) => {
    const allDogs = await axios.get(`${REQ_DOGS}`);
    const dogs = allDogs.data;
    dispatch({ type: GET_ALL_DOGS, payload: dogs });
  };
};

export const getDogById = (id) => {
  return async (dispatch) => {
    const allDogs = await axios.get(`${REQ_DOGS}/${id}`);
    const dog = allDogs.data;
    dispatch({ type: GET_ID_DOG, payload: dog });
  };
};

export const getDogByName = (name) => {
  return async (dispatch) => {
    try {
      const nameDog = await axios.get(`${REQ_DOGS}?name=${name}`);
      const dog = nameDog.data;
      dispatch({ type: GET_NAME_DOG, payload: dog });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Dog not found.." });
    }
  };
};

export const createDog = ({
  image,
  name,
  weight,
  height,
  life_span,
  temperament,
}) => {
  return async (dispatch) => {
    await axios.post(`${REQ_DOGS}`, {
      image,
      name,
      weight,
      height,
      life_span,
      temperament,
    });
    dispatch({ type: CREATE_DOG });
  };
};

export const getAllTemper = () => {
  return async (dispatch) => {
    const allTemper = await axios.get(`${REQ_TEMPER}/`);
    const temper = allTemper.data;
    const orderedTempers = [...temper].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    dispatch({ type: GET_TEMPER, payload: orderedTempers });
  };
};

export const prevPage = () => {
  return (dispatch) => {
    dispatch({ type: PREV_PAGE });
  };
};

export const nextPage = () => {
  return (dispatch) => {
    dispatch({ type: NEXT_PAGE });
  };
};
export const toFirstPage = () => {
  return (dispatch) => {
    dispatch({ type: FIRST_PAGE });
  };
};
export const toLastPage = (lastPage) => {
  return (dispatch) => {
    dispatch({ type: LAST_PAGE, payload: lastPage });
  };
};

export const filterTemper = (temper) => {
  return (dispatch) => {
    dispatch({ type: FILTER_TEMPER, payload: temper });
  };
};
export const filterSource = (source) => {
  return (dispatch) => {
    dispatch({ type: FILTER_SOURCE, payload: source });
  };
};
export const orderName = (order) => {
  return (dispatch) => {
    dispatch({ type: ORDER_NAME, payload: order });
  };
};
export const orderWeight = (weight) => {
  return (dispatch) => {
    dispatch({ type: ORDER_WEIGHT, payload: weight });
  };
};

export const resetDog = () => {
  return (dispatch) => {
    dispatch({ type: RESET_DOG });
  };
};

export const cleanError = () => {
  return (dispatch) => {
    dispatch({ type: SET_ERROR, payload: "" });
  };
};

export const backHome = () => {
  return (dispatch) => {
    dispatch({ type: BACK_HOME });
  };
};

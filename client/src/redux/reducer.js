import { GET_ALL_DOGS, GET_ID_DOG, RESET_DOG } from "./action-types";
// sumar createDog y Temperaments
const initialState = {
  dogs: [],

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: payload,
      };

    case GET_ID_DOG:
      return {
        ...state,
        dogs: payload,
      };
    case RESET_DOG:
      return {
        ...state,
        dogs: [],
      };

    default:
      return { ...state };
  }
};

export default reducer;

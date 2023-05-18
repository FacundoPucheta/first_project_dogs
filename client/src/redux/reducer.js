import { GET_ALL_DOGS, GET_ID_DOG, GET_TEMPER, RESET_DOG, CREATE_DOG } from "./action-types";

const initialState = {
  dogs: [],
  temperaments: [],

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

      case CREATE_DOG:
      return {
        ...state
      };

    case GET_TEMPER:
      return {
        ...state,
        temperaments: payload,
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

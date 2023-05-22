import { GET_ALL_DOGS, GET_ID_DOG, GET_NAME_DOG, GET_TEMPER, RESET_DOG, CREATE_DOG, NEXT_PAGE, PREV_PAGE, FIRST_PAGE, LAST_PAGE } from "./action-types";

const initialState = {
  dogs: [],
  temperaments: [],
  numPage: 1
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

    case GET_NAME_DOG:
      
      return {
        ...state,
        dogs: payload,
        numPage: 1
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
    
    case PREV_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
      };

    case NEXT_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
      };

    case FIRST_PAGE:
      return {
        ...state,
        numPage: 1,
      };

    case LAST_PAGE:
      return {
        ...state,
        numPage: payload,
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

import {
  GET_ALL_DOGS,
  GET_ID_DOG,
  GET_NAME_DOG,
  GET_TEMPER,
  RESET_DOG,
  CREATE_DOG,
  NEXT_PAGE,
  PREV_PAGE,
  FIRST_PAGE,
  LAST_PAGE,
  FILTER_SOURCE,
  FILTER_TEMPER,
  ORDER_NAME,
  ORDER_WEIGHT,
  BACK_HOME,
  SET_ERROR,
} from "./action-types";

const initialState = {
  dogs: [],
  temperaments: [],
  numPage: 1,
  error: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: payload,
        numPage: 1,
      };

    case GET_ID_DOG:
      return {
        ...state,
        dogs: payload,
        numPage: 1,
      };

    case GET_NAME_DOG:
      return {
        ...state,
        dogs: payload,
        numPage: 1,
      };

    case CREATE_DOG:
      return {
        ...state,
      };

    case GET_TEMPER:
      return {
        ...state,
        temperaments: payload,
      };

    case FILTER_TEMPER:
      const dogsCopy = [...state.dogs];
      const temperFilter = dogsCopy.filter((dog) =>
        dog.temperament?.toLowerCase().includes(payload)
      );
      return {
        ...state,
        dogs: temperFilter,
      };

    case FILTER_SOURCE:
      let dogSource;

      if (payload === "all") {
        dogSource = state.dogs;
      }
      if (payload === "default") {
        dogSource = state.dogs.filter((dog) => dog.belongToDb === false);
      }
      if (payload === "created") {
        dogSource = state.dogs.filter((dog) => dog.belongToDb === true);
      }
      return {
        ...state,
        dogs: dogSource,
        numPage: 1,
      };

    case ORDER_NAME:
      return {
        ...state,
        dogs:
          payload === "A"
            ? state.dogs.sort((a, b) => (a.name > b.name ? 1 : -1))
            : state.dogs.sort((a, b) => (a.name < b.name ? 1 : -1)),
      };

    case ORDER_WEIGHT:
      return {
        ...state,
        dogs:
          payload === "A"
            ? state.dogs.sort((a, b) => a.weight?.split("-")[0] - b.weight?.split("-")[0])
            : state.dogs.sort((a, b) => b.weight?.split("-")[1] - a.weight?.split("-")[1]),
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

    case BACK_HOME:
      return {
        ...state,
        numPage: 1,
      };

    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;

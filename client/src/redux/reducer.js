import { GET_ALL_DOGS } from "./action-types";

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

    default:
      return { ...state };
  }
};

export default reducer;

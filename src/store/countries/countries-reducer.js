import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-action";

const initialState = {
  status: "idle",
  list: [],
  error: null,
};

export const countryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return {
        ...state,
        list: payload,
        status: "succes",
      };
    case SET_ERROR:
      return {
        ...state,
        status: "faild",
        error: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };

    default:
      return state;
  }
};

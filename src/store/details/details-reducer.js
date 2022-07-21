import {
  CLEAR_DETAIL,
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  SET_NEIGHBORS,
} from "./details-action";

const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
  neighbors: [],
};

export const detailsRegionReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        error: null,
        status: "loading",
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
        status: "rejected",
      };
    case SET_COUNTRY:
      return {
        ...state,
        status: "received",
        currentCountry: payload,
      };
    case CLEAR_DETAIL:
      return initialState;
    case SET_NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      };
    default:
      return state;
  }
};

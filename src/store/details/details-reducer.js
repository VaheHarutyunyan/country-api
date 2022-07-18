import {SET_COUNTRY, SET_ERROR, SET_LOADING} from "./details-action";

const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
};

export const detailsRegionReducer = (state = initialState, {type, payload}) => {
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
      console.log(payload);
      return {
        ...state,
        status: "received",
        currentCountry: payload,
      };
    default:
      return state;
  }
};

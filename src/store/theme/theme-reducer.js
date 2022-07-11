import { SET_THEME } from "./theme-action";

const initialTheme = {
  type: "light",
};

export const themeReducer = (state = initialTheme, action) => {
  console.log("Action type is", action?.type);
  switch (action.type) {
    case SET_THEME:
      console.log("ACtion in general", action);
      console.log("Action payload is", action.payload);
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

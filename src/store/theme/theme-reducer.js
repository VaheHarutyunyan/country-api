import { SET_THEME } from "./theme-action";

const initialTheme = {
  type: "light",
};

export const themeReducer = (state = initialTheme, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

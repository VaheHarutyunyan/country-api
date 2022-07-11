export const SET_THEME = "SET_THEME";

export const setTheme = (theme) => {
  console.log("Set theme const", SET_THEME);
  console.log("Theme from setTheme", theme);
  return {
    type: SET_THEME,
    payload: theme,
  };
};

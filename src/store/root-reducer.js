import { combineReducers } from "redux";
import { controlsReducer } from "./controls/controls-reducer";
import { countryReducer } from "./countries/countries-reducer";
import { detailsRegionReducer } from "./details/details-reducer";
import { themeReducer } from "./theme/theme-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countryReducer,
  controls: controlsReducer,
  details: detailsRegionReducer,
});

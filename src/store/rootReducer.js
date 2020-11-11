import { combineReducers } from "@reduxjs/toolkit";
import planetsReducer from "./planetsReducer";

const rootReducer = combineReducers({
  planets: planetsReducer,
});

export default rootReducer;

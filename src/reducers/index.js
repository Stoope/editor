import { combineReducers } from "redux";
import mode from "./mode";
import content from "./content";

const reducers = {
  mode,
  content
};

export default combineReducers(reducers);

import { combineReducers } from "redux";
import mode from "./mode";
import content from "./content";
import addBlock from "./addBlock";

const reducers = {
  mode,
  content,
  addBlock
};

export default combineReducers(reducers);

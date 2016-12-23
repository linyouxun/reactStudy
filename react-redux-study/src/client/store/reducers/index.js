import {combineReducers} from "redux";


import {counterAdd} from "./Counter";

// const rootReducer = counterAdd;
const rootReducer = combineReducers({
  counterAdd
});

export default rootReducer;

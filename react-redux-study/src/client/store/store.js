import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

import rootReducer from "./reducers";

// export default createStore(counterAdd);

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware,createLogger())(createStore);
export default createStoreWithMiddleware(rootReducer);

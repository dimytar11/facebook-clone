import { createStore } from "redux";
import { combineReducers } from "redux";
import postReduser from "./reducers/actionReducer";
import dataReducer from "./reducers/userReducer";
import profileReducer from './reducers/profileReducer';

const rootReducer = combineReducers({
  userData: dataReducer,
  actionPost: postReduser,
  profile: profileReducer
 
});


const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;

import { combineReducers } from "redux";
import todoReducer from "./todos";

export default combineReducers({ todo: todoReducer });

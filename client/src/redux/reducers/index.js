// core
import {combineReducers} from "redux";

// reducers
import {phonesReducer} from "./phonesReducer";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({phones: phonesReducer, user: authReducer})
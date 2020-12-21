import { combineReducers } from "redux";
import { userLocationReducer } from './locationReducer';

export const rootReducer = combineReducers({
    userLocation: userLocationReducer
})
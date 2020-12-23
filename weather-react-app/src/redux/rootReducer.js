import { combineReducers } from "redux";
import { userLocationReducer } from './locationReducer';
import { backgroundReducer } from './backgroundReducer';

export const rootReducer = combineReducers({
    userLocation: userLocationReducer,
    backgroundImage: backgroundReducer
})
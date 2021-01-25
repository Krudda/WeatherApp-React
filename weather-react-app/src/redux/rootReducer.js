import { combineReducers } from "redux";
import { locationReducer } from './locationReducer';
import { backgroundReducer } from './backgroundReducer';
import { weatherReducer } from './weatherReducer';
import { settingsReducer } from './settingsReducer';

export const rootReducer = combineReducers({
    backgroundImage: backgroundReducer,
    weather: weatherReducer,
    location: locationReducer,
    serviceStates: settingsReducer,
})
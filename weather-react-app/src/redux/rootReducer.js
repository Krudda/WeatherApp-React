import { combineReducers } from "redux";
import { userLocationReducer, searchLocationReducer } from './locationReducer';
import { backgroundReducer } from './backgroundReducer';
import { weatherReducer } from './weatherReducer';
import { setTempDimensionReducer } from './dimensionReducer';

export const rootReducer = combineReducers({
    userLocation: userLocationReducer,
    backgroundImage: backgroundReducer,
    weather: weatherReducer,
    searchLocation: searchLocationReducer,
    tempDimension: setTempDimensionReducer
})
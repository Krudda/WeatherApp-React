import { combineReducers } from "redux";
import { locationReducer } from './locationReducer';
import { backgroundReducer } from './backgroundReducer';
import { weatherReducer } from './weatherReducer';
import { setTempDimensionReducer } from './dimensionReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
    backgroundImage: backgroundReducer,
    weather: weatherReducer,
    location: locationReducer,
    tempDimension: setTempDimensionReducer,
    loading: loadingReducer
})
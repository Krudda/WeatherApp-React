import {
    SET_MAIN_BACKGROUND, 
    GET_USER_LOCATION, 
    GET_WEATHER, 
    SET_SEARCH_LOCATION, 
    ENABLE_BUTTON, 
    DISABLE_BUTTON,
    SET_TEMP_DIMENSION} from './types';
import getUserLocation from '../services/getUserLocation';
import getMainBackground from '../services/getMainBackground';
import getCurrentWeather from '../services/getWeather';
import speakerHandler from '../services/speakerHandler';

export function setSearchLocation(location) {
    return {
        type: SET_SEARCH_LOCATION, 
        payload: {location}
    }
}

export function getRealUserLocation() {
    return async dispatch => {
        const userLocation = await getUserLocation();
        dispatch({type: GET_USER_LOCATION, payload: userLocation})
    }
}

export function setMainBackground() {
    return async dispatch => {
        const mainBackground = await getMainBackground();
        dispatch({type: SET_MAIN_BACKGROUND, payload: mainBackground})
    }
}

export function getWeather(location) {
    return async dispatch => {
        const weather = await getCurrentWeather(location);
        console.log('weather: ', weather);
        dispatch({type: GET_WEATHER, payload: weather})
    }
}
export function tellWeather() {
    return async function() {
        await speakerHandler();
        // dispatch({type: GET_WEATHER, payload: weather})
    }
}

export function enableButton() {
    return {
        type: ENABLE_BUTTON
    }
}
export function disableButton() {
    return {
        type: DISABLE_BUTTON
    }
}

export function setTempDimension(dimension) {
    return {
        type: SET_TEMP_DIMENSION, 
        payload: dimension
    }
}
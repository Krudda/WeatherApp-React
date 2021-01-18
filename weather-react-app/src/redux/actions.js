import {
    SET_MAIN_BACKGROUND, 
    GET_USER_LOCATION, 
    GET_WEATHER, 
    SET_SEARCH_LOCATION, 
    ENABLE_BUTTON, 
    DISABLE_BUTTON,
    SET_TEMP_DIMENSION,
    SHOW_SPINNER,
    HIDE_SPINNER
} from './types';

import getUserLocation from '../services/getUserLocation';
import getMainBackground from '../services/getMainBackground';
import getCurrentWeather from '../services/getWeather';
import speakerHandler from '../services/speakerHandler';
import getMap from '../services/getMap'

export function setSearchLocation(city) {
    return {
        type: SET_SEARCH_LOCATION, 
        payload: {city}
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

export function getWeather(location, tempDimension) {
    return async dispatch => {
        dispatch(showSpinner());
        const weather = await getCurrentWeather(location, tempDimension);
        dispatch({type: GET_WEATHER, payload: weather});
        dispatch(hideSpinner());
    }
}

export function tellWeather() {
    return async function() {
        await speakerHandler();
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

export function showSpinner() {
    return {
        type: SHOW_SPINNER
    }
}
export function hideSpinner() {
    return {
        type: HIDE_SPINNER
    }
}
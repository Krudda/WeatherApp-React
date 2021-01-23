import {
    SET_MAIN_BACKGROUND, 
    GET_USER_LOCATION, 
    GET_WEATHER, 
    SET_SEARCH_LOCATION, 
    ENABLE_BUTTON, 
    DISABLE_BUTTON,
    SET_TEMP_DIMENSION,
    SHOW_SPINNER,
    HIDE_SPINNER,
    SHOW_IMAGE_SPINNER,
    HIDE_IMAGE_SPINNER
} from './types';

import getUserLocation from '../services/getUserLocation';
import getMainBackground from '../services/getMainBackground';
import getCurrentWeather from '../services/getWeather';
import speakerHandler from '../services/speakerHandler';

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

export function setMainBackground(ImageWeather, timeZone) {
    return async dispatch => {
        dispatch(showImageSpinner());
        const mainBackground = await getMainBackground(ImageWeather, timeZone);
        dispatch({type: SET_MAIN_BACKGROUND, payload: mainBackground});
        dispatch(hideImageSpinner());
    }
}

export function getWeather(location, tempDimension) {
    return async dispatch => {
        dispatch(showSpinner());
        const weather = await getCurrentWeather(location, tempDimension);
        dispatch({type: GET_WEATHER, payload: weather});
        const ImageWeather = weather.data[0].weather.description;
        const timezone = weather.timezone;
        dispatch(setMainBackground(ImageWeather, timezone));
        dispatch(hideSpinner());
    }
}

export function tellWeather() {
    return  function() {
        speakerHandler();
    }
}

export function setTempDimension(dimension) {
    const validDimension = dimension === 'f' ? dimension : 'c';
    return {
        type: SET_TEMP_DIMENSION, 
        payload: validDimension
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
export function showImageSpinner() {
    return {
        type: SHOW_IMAGE_SPINNER
    }
}
export function hideImageSpinner() {
    return {
        type: HIDE_IMAGE_SPINNER
    }
}
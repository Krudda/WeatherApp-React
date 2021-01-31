import {
    SET_MAIN_BACKGROUND, 
    SET_USER_LOCATION, 
    GET_WEATHER, 
    SET_SEARCH_LOCATION,
    SET_TEMP_DIMENSION,
    SHOW_SPINNER,
    HIDE_SPINNER,
    SHOW_IMAGE_SPINNER,
    HIDE_IMAGE_SPINNER,
    NEED_BACKGROUND, 
    VOICE_IS_SYNTHESIZED,
} from './types';

import store from './store';
import getUserLocation from '../services/getUserLocation';
import getMainBackground from '../services/getMainBackground';
import getCurrentWeather from '../services/getWeather';

export function setSearchLocation(city) {
    return {
        type: SET_SEARCH_LOCATION, 
        payload: {city}
    }
}

export function setUserLocation() {
    return async dispatch => {
        dispatch(showSpinner());
        const userLocation = await getUserLocation();
        dispatch({type: SET_USER_LOCATION, payload: userLocation});
        dispatch(hideSpinner());
    }
}

export function setMainBackground(ImageWeather, timeZone) {
    const state = store.getState();
    const needImage  = state.serviceStates.needImage;

    if (needImage) {
        return async dispatch => {
            dispatch(showImageSpinner());
            const mainBackground = await getMainBackground(ImageWeather, timeZone);
            dispatch({type: SET_MAIN_BACKGROUND, payload: mainBackground});
            dispatch(hideImageSpinner());
        }
    } else {
        return {type: NEED_BACKGROUND, payload: true};
    }
}

export function getWeather(location, tempDimension) {
    return async dispatch => {
        dispatch(showSpinner());
        const weather = await getCurrentWeather(location, tempDimension);
        dispatch({type: GET_WEATHER, payload: weather});
        if (!weather.error) {
            const ImageWeather =  weather ? weather.data[0].weather.description: null;
            const timezone = weather ?  weather.timezone : null;
            dispatch(setMainBackground(ImageWeather, timezone));
        }
        dispatch(hideSpinner());
    }
}

export function setTempDimension(dimension) {
    const validDimension = dimension === 'f' ? dimension : 'c';
    return {
        type: SET_TEMP_DIMENSION, 
        payload: validDimension
    }
}

export function setVoiceSynthesis(isSynthesized) {
    return {
        type: VOICE_IS_SYNTHESIZED, 
        payload: isSynthesized
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
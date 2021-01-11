import {SET_MAIN_BACKGROUND, GET_USER_LOCATION, GET_WEATHER, SET_SEARCH_LOCATION} from './types';
import getUserLocation from '../services/getUserLocation';
import getMainBackground from '../services/getMainBackground';
import getCurrentWeather from '../services/getWeather';

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
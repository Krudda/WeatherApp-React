import {SET_USER_LOCATION, GET_USER_LOCATION} from './types';
import getUserLocation from '../services/getUserLocation';

export function setUserLocation(location) {
    return {
        type: SET_USER_LOCATION, 
        payload: location
    }
}

export function getRealUserLocation() {
    return async dispatch => {
        const userLocation = await getUserLocation();
        dispatch({type: GET_USER_LOCATION, payload: userLocation})
    }
}
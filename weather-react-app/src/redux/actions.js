import {SET_MAIN_BACKGROUND, GET_USER_LOCATION} from './types';
import getUserLocation from '../services/getUserLocation';
import getMainBackground from '../services/getMainBackground';

// export function setUserLocation(location) {
//     return {
//         type: SET_USER_LOCATION, 
//         payload: location
//     }
// }

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
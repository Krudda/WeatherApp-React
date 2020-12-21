import {SET_USER_LOCATION} from './types'

export function setUserLocation(location) {
    return {
        type: SET_USER_LOCATION, 
        payload: location
    }
}
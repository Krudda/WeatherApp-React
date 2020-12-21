import {SET_USER_LOCATION} from './types'

const initialState = {
    userLocation : {city: 'London', country: 'GB'}
}

export const userLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOCATION: {
            return {...state, userLocation: [...state.userLocation, action.payload]}
        }
        default: return state;
    }
}
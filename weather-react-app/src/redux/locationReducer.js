import {GET_USER_LOCATION, SET_SEARCH_LOCATION} from './types';

const initialState = {
    // userLocation : {city: 'Nizhniy Novgorod', country: 'RU'},
    userLocation : {city: 'Phuket', country: 'TH'},
    searchLocation : {city: ''}
}

export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LOCATION: 
            return {...state, userLocation: action.payload}
        case SET_SEARCH_LOCATION: 
            return {...state, searchLocation: action.payload}
        default: return state;
    }
}
import {GET_WEATHER} from './types';

const initialState = {
    weather: {}
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER: 
            return {...state, weather: action.payload}
        default: return state;
    }
}
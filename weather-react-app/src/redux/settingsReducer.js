import { SET_TEMP_DIMENSION, 
    SHOW_SPINNER, 
    HIDE_SPINNER, 
    NEED_BACKGROUND, 
    SHOW_IMAGE_SPINNER, 
    HIDE_IMAGE_SPINNER,
    VOICE_IS_SYNTHESIZED } from './types';

const initialState = {
    tempDimension : 'c',
    weatherLoading: true,
    voiceSynthesizing: false,
    imageLoading: false,
    needImage: false
}

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMP_DIMENSION: 
            return {...state, tempDimension: action.payload}
        case SHOW_SPINNER: 
            return {...state, weatherLoading: true}
        case HIDE_SPINNER: 
            return {...state, weatherLoading: false}
        case NEED_BACKGROUND: 
            return {...state, needImage: action.payload}
        case SHOW_IMAGE_SPINNER: 
            return {...state, imageLoading: true}
        case HIDE_IMAGE_SPINNER: 
            return {...state, imageLoading: false}
        case VOICE_IS_SYNTHESIZED: 
            return {...state, voiceSynthesizing: action.payload}
        default: return state;
    }
}
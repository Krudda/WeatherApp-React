import {SET_MAIN_BACKGROUND} from './types';

const initialState = {
    mainBackgroundImage : 'https://momentum.photos/img/5ba1ea15-393c-428a-899b-13aafaebe222.jpg'
}

export const backgroundReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_BACKGROUND: 
            return {...state, mainBackgroundImage: action.payload}
        default: return state;
    }
}
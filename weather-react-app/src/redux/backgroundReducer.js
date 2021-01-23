import {SET_MAIN_BACKGROUND, SHOW_IMAGE_SPINNER, HIDE_IMAGE_SPINNER} from './types';

const initialState = {
    mainBackgroundImage : 'https://momentum.photos/img/5ba1ea15-393c-428a-899b-13aafaebe222.jpg?momo_cache_bg_uuid=451ac42d-f608-4933-a705-7132a534c6d7',
    isLoading: false
}

export const backgroundReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_BACKGROUND: 
            return {...state, mainBackgroundImage: action.payload}
        case SHOW_IMAGE_SPINNER: 
            return {...state, isLoading: true}
        case HIDE_IMAGE_SPINNER: 
            return {...state, isLoading: false}
        default: return state;
    }
}
import { SHOW_SPINNER, HIDE_SPINNER } from './types';

const initialState = {
    loading: false
}

export const  loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPINNER: 
            return {...state, loading: true}
        case HIDE_SPINNER: 
            return {...state, loading: false}
        default: return state;
    }
}
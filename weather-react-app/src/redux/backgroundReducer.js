import {SET_MAIN_BACKGROUND} from './types';

const initialState = {
    mainBackgroundImage : 'https://images.unsplash.com/photo-1563823856120-88d1fe6b75bc?ixlib=rb-1.2.1&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&ixid=eyJhcHBfaWQiOjcwOTV9',
}

export const backgroundReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_BACKGROUND: 
            return {...state, mainBackgroundImage: action.payload}
        default: return state;
    }
}
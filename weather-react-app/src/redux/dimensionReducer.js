import { SET_TEMP_DIMENSION } from './types';

const initialState = {
    tempDimension : 'c',
}

export const setTempDimensionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMP_DIMENSION: 
            return {...state, tempDimension: action.payload}
        default: return state;
    }
}
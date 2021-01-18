import {GET_USER_LOCATION, SET_SEARCH_LOCATION} from './types';

const initialStateUser = {
    // userLocation : {city: 'Nizhniy Novgorod', country: 'RU'},
        userLocation : {city: 'Phuket', country: 'TH'},
}
const initialStateSearch = {
    searchLocation : {},
}

export const userLocationReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case GET_USER_LOCATION: 
            return {...state, userLocation: action.payload}
        default: return state;
    }
}

// export const searchLocationReducer = (state = initialStateSearch, action) => {
//     switch (action.type) {
//         case SET_SEARCH_LOCATION: 
//             return {...state, searchLocation: action.payload}
//         default: return state;
//     }
// }
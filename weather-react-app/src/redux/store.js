import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../redux/rootReducer';

const store = createStore(rootReducer, 
    compose (
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import {HashRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';


const  app = (
  <Provider store = {store}>
    <Router>
      <Route component = {App}/>
    </Router>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

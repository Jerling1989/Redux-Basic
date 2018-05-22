// IMPORT OBJECTS AND METHODS
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// IMPORT MAIN REACT COMPONENT AND REDUX REDUCERS
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// RENDER THE MAIN REACT COMPONENT IN THE DOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

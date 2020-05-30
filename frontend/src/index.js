import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducer from './reducers';
import { Provider } from 'react-redux';

//Store
const store = createStore(
  allReducer, 
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


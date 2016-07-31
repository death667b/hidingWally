import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/Root';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reducer } from './logic/reducer';

/**
 * the redux store with redux-thunk middleware applied.
 */
const store = createStore(reducer, applyMiddleware(thunk));

/**
 * the react application mount point
 */
const mountNode = document.getElementById('app');

/*
 * mounts react to DOM
 */
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  mountNode
);

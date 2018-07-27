import { createStore, compose, applyMiddleware } from 'redux'
import { install } from 'redux-loop';
import logger from 'redux-logger';
import reducers from './reducers';

const enhancer = compose(
  applyMiddleware(logger),
  install()
);

export const initStore = (initialState = {}) => {
  return createStore(reducers, initialState, enhancer);
}

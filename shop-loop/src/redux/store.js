import { createStore, compose, applyMiddleware } from 'redux'
import { install } from 'redux-loop';
import logger from 'redux-logger';
import reducers from './reducers';

const enhancer = compose(
  applyMiddleware(logger),
  install()
);

const defaultState = {
  db: {},
  local: {}
};

export const initStore = (initialState = defaultState) => {
  return createStore(reducers, initialState, enhancer);
}

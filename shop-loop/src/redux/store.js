import { createStore, compose } from 'redux'
import { install } from 'redux-loop';
import reducers from 'src/redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  install()
);

const defaultState = {
  db: {},
  local: {}
};

export const initStore = (initialState = defaultState) => {
  return createStore(reducers, initialState, enhancer);
}


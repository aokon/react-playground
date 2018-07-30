import { combineReducers } from 'redux-loop';

import products from './products';
import product  from './product';
import cart     from './cart';

const db = combineReducers({
  products,
  product,
});

const local = combineReducers({
  cart
});

const rootReducer = combineReducers({
  db,
  local
});

export default rootReducer;

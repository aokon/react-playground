import { combineReducers } from 'redux-loop';

import products from './products';
import product  from './product';
import cart     from './cart';

const rootReducer = combineReducers({
  products,
  product,
  cart
});

export default rootReducer;

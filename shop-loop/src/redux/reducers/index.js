import { combineReducers } from 'redux-loop';

import products from 'src/redux/reducers//products';
import product  from 'src/redux/reducers//product';
import cart     from 'src/redux/reducers/cart';
import orders   from 'src/redux/reducers/orders';

const db = combineReducers({
  products,
  product,
  orders
});

const local = combineReducers({
  cart
});

const rootReducer = combineReducers({
  db,
  local
});

export default rootReducer;


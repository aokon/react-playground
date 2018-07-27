import { combineReducers } from 'redux-loop';
import products from './products';
import product from './product';

const rootReducer = combineReducers({
  products,
  product
});

export default rootReducer;

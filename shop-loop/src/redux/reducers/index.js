import { combineReducers } from 'redux-loop';
import products from './products';

const rootReducer = combineReducers({
  products
});

export default rootReducer;

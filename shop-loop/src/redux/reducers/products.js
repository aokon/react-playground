import { loop, Cmd } from 'redux-loop';
import fetchProductsRequest from 'src/api/fetchProductsRequest';

const defaultState = {
  model: [],
  loading: false,
  error: undefined
};

const PRODUCTS_INIT          = 'PRODUCTS_INIT';
const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';
const PRODUCTS_FETCH_ERROR   = 'PRODUCTS_FETCH_ERROR';

export const productsInit = () => ({
  type: PRODUCTS_INIT
});

const productsFetchOnSuccess = (products) => ({
  type: PRODUCTS_FETCH_SUCCESS,
  payload: products
});

const productsFetchOnError = (error) => ({
  type: PRODUCTS_FETCH_ERROR,
  payload: error
});

const reducer = (state = defaultState, { type, payload }) => {
  switch(type) {
    case PRODUCTS_INIT:
      return loop(
        { ...state, loading: true },
        Cmd.run(fetchProductsRequest, {
          successActionCreator: productsFetchOnSuccess,
          failActionCreator: productsFetchOnError
        })
      );
    case PRODUCTS_FETCH_SUCCESS:
      return loop(
        { ...state, model: payload, loading: false, error: undefined },
        Cmd.none
      );
    case PRODUCTS_FETCH_ERROR:
      return loop(
        { ...state, error: payload, loading: false },
        Cmd.none
      );
    default:
      return state;
  }
};

export default reducer;


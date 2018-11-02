import { loop, Cmd } from 'redux-loop';
import fetchProductRequest from 'src/api/fetchProductRequest';

const defaultState = {
  model: [],
  loading: false,
  error: undefined
};

const PRODUCT_INIT          = 'PRODUCT_INIT';
const PRODUCT_FETCH_SUCCESS = 'PRODUCT_FETCH_SUCCESS';
const PRODUCT_FETCH_ERROR   = 'PRODUCT_FETCH_ERROR';

export const productInit = (id) => ({
  type: PRODUCT_INIT,
  payload: id
});

const productFetchOnSuccess = (product) => ({
  type: PRODUCT_FETCH_SUCCESS,
  payload: product
});

const productFetchOnError = (error) => ({
  type: PRODUCT_FETCH_ERROR,
  payload: error
});

const reducer = (state = defaultState, { type, payload }) => {
  switch(type) {
    case PRODUCT_INIT:
      return loop(
        { ...state, loading: true },
        Cmd.run(fetchProductRequest, {
          successActionCreator: productFetchOnSuccess,
          failActionCreator: productFetchOnError,
          args: [payload]
        })
      );
    case PRODUCT_FETCH_SUCCESS:
      return loop(
        { ...state, model: payload, loading: false, error: undefined },
        Cmd.none
      );
    case PRODUCT_FETCH_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export default reducer;


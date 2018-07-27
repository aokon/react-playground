import { loop, Cmd } from 'redux-loop';

const defaultState = {
  model: [],
  loading: false,
  error: undefined
};

const PRODUCT_INIT          = 'PRODUCT_INIT';
const PRODUCT_FETCH_SUCCESS = 'PRODUCT_FETCH_SUCCESS';
const PRODUCT_FETCH_ERROR   = 'PRODUCT_FETCH_ERROR';

const API_HOST = 'http://localhost:3001';

const fetchProduct = (id) => {
  return fetch(`${API_HOST}/products/${id}`).then(response => response.json());
}

export const productInit = (id) => ({
  type: PRODUCT_INIT,
  id
});

const productFetchOnSuccess = (product) => ({
  type: PRODUCT_FETCH_SUCCESS,
  product
});

const productFetchOnError = (error) => ({
  type: PRODUCT_FETCH_ERROR,
  error
});

export default (state = defaultState, action) => {
  switch(action.type) {
  case PRODUCT_INIT:
    return loop(
      { ...state, loading: true },
      Cmd.run(fetchProduct, {
        successActionCreator: productFetchOnSuccess,
        failActionCreator: productFetchOnError,
        args: [action.id]
      })
    );
  case PRODUCT_FETCH_SUCCESS:
    return { ...state, model: action.product, loading: false };
  case PRODUCT_FETCH_ERROR:
    return { ...state, error: action.error, loading: false };
  default:
    return state;
  }
}

const defaultState = {};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
})

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product
})

export default (state = defaultState, { type, payload }) => {
  switch(type) {
  case ADD_TO_CART:
    return { ...state, [payload.id]: payload };
  case REMOVE_FROM_CART:
    const { [payload.id]: value, ...rest } = state;
    return { ...rest };
  default:
    return state;
  }
};

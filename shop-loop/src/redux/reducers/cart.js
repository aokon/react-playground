const defaultState = {};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const RESET_CART = 'RESET_CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product
});

export const resetCart = () => ({
  type: RESET_CART
});


const reducer = (state = defaultState, { type, payload }) => {
  switch(type) {
  case ADD_TO_CART:
    return { ...state, [payload.id]: payload };
  case REMOVE_FROM_CART:
    const newState = Object.assign({}, state);
    delete newState[payload.id];
    return newState;
  case RESET_CART:
    return defaultState;
  default:
    return state;
  }
};

export default reducer;


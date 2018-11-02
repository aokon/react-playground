import { Cmd, loop } from 'redux-loop';
import createOrderRequest from 'src/api/createOrderRequest';
import { resetCart } from 'src/redux/reducers/cart';

const defaultState = { type: 'initial' }

const CREATE_ORDER = 'CREATE_ORDER';
const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
const CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR';

export const createOrder = (order) => ({
  type: CREATE_ORDER,
  payload: order
});

const createOrderOnSuccess = (response) => ({
  type: CREATE_ORDER_SUCCESS,
  payload: response
});

const createOrderOnError = () => ({
  type: CREATE_ORDER_ERROR
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CREATE_ORDER_SUCCESS:
      return loop({ type: 'ok' }, Cmd.action(resetCart()));
    case CREATE_ORDER:
      return loop({
          type: 'loading',
        },
        Cmd.run(createOrderRequest, {
          args: [action.payload],
          successActionCreator: createOrderOnSuccess,
          failActionCreator: createOrderOnError 
        })
      );
    case CREATE_ORDER_ERROR:
      return loop({ type: 'error' }, Cmd.none);
    default:
      return state;
  }

};

export default reducer;


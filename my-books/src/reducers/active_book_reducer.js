// @state is not application state, only the state
// this reducer is responsible for

import { BOOK_SELECTED } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case BOOK_SELECTED:
      return action.payload; // return only fresh object
  }

  return state;
}

import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY
} from '../actions/types';

const INITIAL_STATE = {
  all: { model: [], loading: false, error: null },
  category:  { model: null, loading: false, error: null }
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_CATEGORY:
      return { ...state, category: { model: action.payload.data } };
    case FETCH_CATEGORIES:
      return { ...state, all: { model: [], loading: true, error: null } };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, all: { model: action.payload.data, loading: false, error: null } };
    case FETCH_CATEGORIES_FAILED:
      return { ...state, all: { model: [], loading: false, error: 'Sorry, something went wrong. Please retry :)' } };
  }

  return state;
}

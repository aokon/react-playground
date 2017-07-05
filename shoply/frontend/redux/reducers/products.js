import * as types from '../actions/types'

const INITIAL_STATE = {
  category:  { model: null, loading: false, error: null }
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.FETCH_CATEGORY_PRODUCTS:
      return { ...state, category: { model: [], loading: true, error: null } }
    case types.FETCH_CATEGORY_PRODUCTS_SUCCESS:
      return { ...state, category: {
        model: action.payload.data,
        loading: false,
        error: null
      }}
    case types.FETCH_CATEGORY_PRODUCTS_FAILED:
      return { ...state, category: {
        model: [],
        loading: false,
        error: 'Sorry, something went wrong. Please retry :)'
      }}
  }

  return state
}
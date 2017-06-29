import axios from 'axios'
import * as types from './types'

const API_PATH = 'http://api.shoply.dev'

export function fetchCategories() {
  return function(dispatch) {
    dispatch({ type: types.FETCH_CATEGORIES })

    axios.get(`${API_PATH}/v1/categories`).then((response) => {
      dispatch({
        type: types.FETCH_CATEGORIES_SUCCESS,
        payload: response.data
      })
    }).catch(() => {
      dispatch({ type: types.FETCH_CATEGORIES_FAILED });
    })
  }
}

export function fetchCategory(id) {
  return function(dispatch) {
    axios.get(`${API_PATH}/v1/categories/${id}`).then((response) => {
      dispatch({
        type: types.FETCH_CATEGORY,
        payload: response.data
      })
    })
  }
}

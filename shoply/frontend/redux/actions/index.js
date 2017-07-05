/* global API_URL */
import axios from 'axios'
import * as types from './types'

export function fetchCategories() {
  return function(dispatch) {
    dispatch({ type: types.FETCH_CATEGORIES })

    axios.get(`${API_URL}/v1/categories`).then((response) => {
      dispatch({
        type: types.FETCH_CATEGORIES_SUCCESS,
        payload: response.data
      })
    }).catch(() => {
      dispatch({ type: types.FETCH_CATEGORIES_FAILED })
    })
  }
}

export function fetchCategory(id) {
  return function(dispatch) {
    axios.get(`${API_URL}/v1/categories/${id}`).then((response) => {
      dispatch({
        type: types.FETCH_CATEGORY,
        payload: response.data
      })
    })
  }
}

export function fetchCategoryProducts(id) {
  return function(dispatch) {
    dispatch({ type: types.FETCH_CATEGORY_PRODUCTS })

    axios.get(`${API_URL}/v1/products?filter[category_id]=${id}`).then((response) => {
      dispatch({
        type: types.FETCH_CATEGORY_PRODUCTS_SUCCESS,
        payload: response.data
      })
    }).catch(() => {
      dispatch({ type: types.FETCH_CATEGORY_PRODUCTS_FAILED })
    })
  }
}

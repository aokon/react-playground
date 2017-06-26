import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY
} from './types';

import axios from 'axios';

const API_PATH = 'http://api.shoply.dev';

export function fetchCategories() {
  return function(dispatch) {
    dispatch({ type: FETCH_CATEGORIES });

    axios.get(`${API_PATH}/v1/categories`).then((response) => {
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: response.data
      })
    }).catch(() => {
      dispatch({ type: FETCH_CATEGORIES_FAILED });
    });
  }
}

export function fetchCategory(id) {
  return function(dispatch) {
    axios.get(`${API_PATH}/v1/categories/${id}`).then((response) => {
      dispatch({
        type: FETCH_CATEGORY,
        payload: response.data
      })
    });
  }
}

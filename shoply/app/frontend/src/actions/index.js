import {
  FETCH_CATEGORIES,
  FETCH_CATEGORY
} from './types';

import axios from 'axios';

const API_PATH = 'http://api.sholpy.dev';

export function fetchCategories() {
  return function(dispatch) {
    axios.get(`${API_PATH}/v1/categories`).then((response) => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: response.data
      })
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

import {
  FETCH_CATEGORIES
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

const API_HOST = 'http://localhost:3001';

const fetchProducts = () => {
  return makeRequest('/products');
}

const fetchProduct = (id) => {
  return makeRequest(`/products/${id}`);
}

const makeRequest = (endpoint) => {
  return fetch(`${API_HOST}${endpoint}`).then(response => response.json());
}

export default {
  fetchProducts,
  fetchProduct
}

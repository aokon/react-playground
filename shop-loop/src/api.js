const API_HOST = 'http://localhost:3001';

const fetchProducts = () => {
  return makeRequest('/products');
}

const fetchProduct = (id) => {
  return makeRequest(`/products/${id}`);
}

const createOrder = (order) => {
  const requestParams = {
    method: 'POST',
    body: JSON.stringify(order)
  }

  return makeRequest('/orders', requestParams)
};

const makeRequest = (endpoint, requestParams = {}) => {
  return fetch(`${API_HOST}${endpoint}`, { ...requestParams })
    .then(response => response.json());
}

export default {
  fetchProducts,
  fetchProduct,
  createOrder
}

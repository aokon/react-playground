import makeRequest from 'src/api/makeRequest';

const fetchProductRequest = (id) => {
  return makeRequest(`/products/${id}`);
}

export default fetchProductRequest;


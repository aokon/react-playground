import makeRequest from 'src/api/makeRequest';

const fetchProductsRequest = () => {
  return makeRequest('/products');
}

export default fetchProductsRequest;


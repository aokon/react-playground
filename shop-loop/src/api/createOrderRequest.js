import makeRequest from 'src/api/makeRequest';

const createOrderRequest = (order) => {
  const requestParams = {
    method: 'POST',
    body: JSON.stringify(order)
  }

  return makeRequest('/orders', requestParams)
};

export default createOrderRequest;


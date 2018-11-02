const API_HOST = 'http://localhost:3001';

const makeRequest = (endpoint, requestParams = {}) => {
  return fetch(`${API_HOST}${endpoint}`, { ...requestParams })
    .then(response => response.json());
}

export default makeRequest;


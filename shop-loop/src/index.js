import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { initStore } from './redux/store';

ReactDOM.render((
  <Provider store={initStore()}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();

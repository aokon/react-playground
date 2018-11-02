import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'src/index.css';
import App from 'src/App';
import registerServiceWorker from 'src/registerServiceWorker';
import { initStore } from 'src/redux/store';

ReactDOM.render((
  <Provider store={initStore()}>
    <App />
  </Provider>
), document.getElementById('root'));

registerServiceWorker();


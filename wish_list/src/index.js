import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import { WishList } from './models/WishList'

  const list = WishList.create({
    items: [
      {
        name: 'Dummy 1',
        price: 14.7
      },
      {
        name: 'Dummy 2',
        price: 12.2
      },
    ]
  })

ReactDOM.render(<App wishList={list} />, document.getElementById('root'));
registerServiceWorker();

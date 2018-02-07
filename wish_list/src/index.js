import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { onSnapshot } from 'mobx-state-tree'
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import { WishList } from './models/WishList'

let initialState = {
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
}

if(localStorage.getItem('wish-list-app')) {
  const json = JSON.parse(localStorage.getItem('wish-list-app'))

  // check if the loaded data from localstorage have valid schema
  if(WishList.is(json)) {
    initialState = json
  }
}

const list = WishList.create(initialState)

onSnapshot(list, snapshot => {
  localStorage.setItem('wish-list-app', JSON.stringify(snapshot))
})

ReactDOM.render(<App wishList={list} />, document.getElementById('root'));
registerServiceWorker();

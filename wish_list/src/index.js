import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { onSnapshot } from 'mobx-state-tree'
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import { WishList } from './models/WishList'
import { getSnapshot } from 'mobx-state-tree';

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

// if(localStorage.getItem('wish-list-app')) {
//   const json = JSON.parse(localStorage.getItem('wish-list-app'))

//   // check if the loaded data from localstorage have valid schema
//   if(WishList.is(json)) {
//     initialState = json
//   }
// }

let list = WishList.create(initialState)

// onSnapshot(list, snapshot => {
//   localStorage.setItem('wish-list-app', JSON.stringify(snapshot))
// })

function renderApp() {
  ReactDOM.render(<App wishList={list} />, document.getElementById('root'));
}

renderApp()

if(module.hot) {
  module.hot.accept(['./components/App'], () => {
    renderApp()
  })

  module.hot.accept(['./models/WishList'], () => {
    const snapshot = getSnapshot(list)
    list = WishList.create(snapshot)
    renderApp()
  })
}

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { onSnapshot } from 'mobx-state-tree'
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import { Group } from './models/Group'
import { getSnapshot } from 'mobx-state-tree';

let initialState = { users: {} }

// if(localStorage.getItem('wish-list-app')) {
//   const json = JSON.parse(localStorage.getItem('wish-list-app'))

//   // check if the loaded data from localstorage have valid schema
//   if(WishList.is(json)) {
//     initialState = json
//   }
// }

let group = window.group = Group.create(initialState)
// onSnapshot(list, snapshot => {
//   localStorage.setItem('wish-list-app', JSON.stringify(snapshot))
// })

function renderApp() {
  ReactDOM.render(<App group={group} />, document.getElementById('root'));
}

renderApp()

if(module.hot) {
  module.hot.accept(['./components/App'], () => {
    renderApp()
  })

  module.hot.accept(['./models/Group'], () => {
    const snapshot = getSnapshot(group)
    group = window.group = Group.create(snapshot)
    renderApp()
  })
}

registerServiceWorker();

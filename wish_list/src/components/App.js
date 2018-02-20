import React, { Component } from 'react'

import WishListView from './WishListView'

class App extends Component {
  constructor() {
    super()

    this.state = { selectedUser: null }
  }

  onChangeUser = (event) => {
    const { group } = this.props

    this.setState({ selectedUser: group.users.get(event.target.value) })
  }

  render() {
    const { group } = this.props
    const { selectedUser } = this.state

    return (
      <div className="app">
        <h2>Select users:</h2>
        <select onChange={this.onChangeUser}>
          <option>Select User</option>
          {group.users.values().map((user) => (<option key={user.id} value={user.id}>{user.name}</option>))}
        </select>
        <hr />
        {selectedUser && <WishListView wishList={selectedUser.wishList} />}
        {selectedUser && <button onClick={selectedUser.getSugestions}>Load suggestions</button>}
      </div>
    );
  }
}

export default App;

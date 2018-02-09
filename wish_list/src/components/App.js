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

    return (
      <div className="app">
        <h2>Select users:</h2>
        <select onChange={this.onChangeUser}>
          <option>Select User</option>
          {group.users.values().map((user) => (<option key={user.id} value={user.id}>{user.name}</option>))}
        </select>
        <hr />
        {this.state.selectedUser && <WishListView wishList={this.state.selectedUser.wishList} />}
      </div>
    );
  }
}

export default App;

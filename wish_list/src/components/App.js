import React, { Component } from 'react'

import User from './User'

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
        <button onClick={group.drawLots}>Draw lots</button>
        <button onClick={group.reload}>Reload</button>
        <hr />
        {selectedUser && <User user={selectedUser} />}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'

import WishListItemForm from './WishListItemForm'
import { clone, applySnapshot, getSnapshot } from 'mobx-state-tree';

class WishListItemView extends Component {
  constructor() {
    super()

    this.state = {
      isEditing: false,
      clone: null
    }
  }

  onToggleEdit = () => {
    this.setState({
      isEditing: true,
      clone: clone(this.props.item)
    })
  }

  onCancelEdit = () => {
    this.setState({ isEditing: false })
  }

  onSave = () => {
    applySnapshot(this.props.item, getSnapshot(this.state.clone))
    this.setState({ isEditing: false, clone: null })
  }

  renderForm = () => {
    return (
      <div className="wish-list-item">
        <WishListItemForm item={this.state.clone} />
        <button onClick={this.onCancelEdit}>Cancel</button>
        <button onClick={this.onSave}>Save</button>
      </div>
    )
  }

  render() {
    const { item } = this.props

    return this.state.isEditing ? (
      this.renderForm()
    ) : (
      <div className="wish-list-item">
        <h4>{item.name}</h4>
        <p>Price: <i>{item.price}</i></p>
        <button onClick={this.onToggleEdit}>Edit</button>
      </div>
    )
  }
}

export default WishListItemView

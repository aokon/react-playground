import React, { Component } from 'react'
import { observer } from 'mobx-react'

import WishListItemForm from './WishListItemForm'
import { WishListItem } from '../models/WishList'

class WishListNewItem extends Component {
  constructor() {
    super()

    this.state = {
      entry: WishListItem.create({
        name: "",
        price: 0
      })
    }
  }

  onAdd = () => {
    this.props.wishList.add(this.state.entry)
    this.setState({
      entry: WishListItem.create({
        name: "",
        price: 0
      })
    })
  }

  render() {
    return (
      <div className="wish-list-new-item">
        <WishListItemForm item={this.state.entry} />
        <button onClick={this.onAdd}>Add</button>
      </div>
    )
  }
}

export default observer(WishListNewItem)

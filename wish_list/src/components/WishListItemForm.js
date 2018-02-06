import React, { Component } from 'react'
import { observer } from 'mobx-react'

class WishListItemForm extends Component {

  onNameChange = (event) => {
    this.props.item.changeName(event.target.value)
  }

  onPriceChange = (event) => {
    const price = parseFloat(event.target.value)

    if(!isNaN(price)) {
      this.props.item.changePrice(price)
    }
  }

  render() {
    const { item } = this.props

    return (
      <div className="wish-list-item-form">
        Name: <input value={item.name} onChange={this.onNameChange} /> <br />
        Price: <input value={item.price} onChange={this.onPriceChange} /> <br />
      </div>
    )
  }
}

export default observer(WishListItemForm)

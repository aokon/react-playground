import React, { Component } from 'react'
import { observer } from 'mobx-react'

import WishListItemView from './WishListItemView'
import WishListNewItem from './WishListNewItem'

class WishListView extends Component {
  renderList() {
    return this.props.wishList.items.map((item) =>
      <WishListItemView key={item.name} item={item} />
    )
  }

  render() {
    return (
      <div className="wish-list-view">
        <WishListNewItem wishList={this.props.wishList} />
        {this.renderList()}
        <hr />
        <div className="wish-list-view__total-price">
          Total Price: {this.props.wishList.totalPrice}
        </div>
      </div>
    )
  }
}

export default observer(WishListView)

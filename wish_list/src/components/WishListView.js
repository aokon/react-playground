import React, { Component } from 'react'

import WishListItemView from './WishListItemView'

class WishListView extends Component {
  renderList() {
    return this.props.wishList.items.map((item) => <WishListItemView key={item.name} item={item} /> )
  }

  render() {
    return (
      <div className="wish-list-view">
        {this.renderList()}
      </div>
    )
  }
}

export default WishListView

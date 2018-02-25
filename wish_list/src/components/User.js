import React from 'react'
import WishListView from './WishListView'

export default ({ user }) => (
  <div className="user">
    <button onClick={user.getSugestions}>Load suggestions</button>
    <hr />
    Recipient: {user.recipient ? user.recipient.name : '' }
    <hr />
    {user && <WishListView wishList={user.wishList} />}
  </div>
)

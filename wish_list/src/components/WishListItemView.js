import React from 'react'

export default ({ item }) => (
  <div className="wish-list-item">
    <h4>{item.name}</h4>
    <p>Price: <i>{item.price}</i></p>
  </div>
)

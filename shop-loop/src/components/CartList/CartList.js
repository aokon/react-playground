import React from 'react';

const CartListItem = ({ model }) => (
  <div className="cartListItem">
    <div className="cartListItem__name">{model.name}</div>
    <div className="cartListItem__action">
      <button>Remove from Cart</button>
    </div>
  </div>
);

export default ({ model }) => (
  <div className="cartList">
    {Object.values(model).map((item) =>
       <CartListItem key={item.id} model={item} /> )}
  </div>
);

import React from 'react';

const CartListItem = ({ model, onClick }) => (
  <div className="cartListItem">
    <div className="cartListItem__name">{model.name}</div>
    <div className="cartListItem__action">
      <button onClick={() => onClick(model)}>Remove from Cart</button>
    </div>
  </div>
);

export default ({ model, onClick }) => (
  <div className="cartList">
    {Object.values(model).map((item) =>
       <CartListItem key={item.id} model={item} onClick={onClick} /> )}
  </div>
);

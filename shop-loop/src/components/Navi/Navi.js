import React from 'react';
import { Link } from 'react-router-dom';

const cartItemsLength = (cart) => Object.keys(cart).length

export default ({ cart }) => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/cart">Cart ( {cartItemsLength(cart)} )</Link></li>
    </ul>
  </nav>
);

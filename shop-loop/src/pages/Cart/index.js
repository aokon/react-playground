import React from 'react';
import { Link } from 'react-router-dom';

import CartList from '../../components/CartList';

export default () => (
  <div className="about">
    <h1>Your Cart</h1>
    <CartList />
    <Link to="/checkout">Checkout</Link>
  </div>
);

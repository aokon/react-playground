import React from 'react';
import { Link } from 'react-router-dom';

export default ({ product }) => (
  <div className="products-item">
    <h3>
      <Link to={`/products/${product.id}`}>{product.name}</Link>
    </h3>
    <p>{product.description}</p>
  </div>
);

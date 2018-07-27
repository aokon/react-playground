import React from 'react';

export default ({ product }) => (
  <div className="products-item">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
  </div>
);

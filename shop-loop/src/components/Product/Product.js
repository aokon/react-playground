import React from 'react';

export default ({ product: { model } }) => (
  <div className="products-item">
    <h3>{model.name}</h3>
    <p>{model.description}</p>
  </div>
);

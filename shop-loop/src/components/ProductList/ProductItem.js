import React from 'react';
import { Link } from 'react-router-dom';

export default ({ model, onClick }) => (
  <div className="products-item">
    <h3>
      <Link to={`/products/${model.id}`}>{model.name}</Link>
    </h3>
    <p>{model.description}</p>
    <button onClick={() => onClick(model)}>Add To Cart</button>
  </div>
);


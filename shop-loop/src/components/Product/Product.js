import React from 'react';
import Spinner from '../Spinner/Spinner';

export default ({ product: { model, loading } }) => {
  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="products-item">
      <h3>{model.name}</h3>
      <p>{model.description}</p>
    </div>
  );
};

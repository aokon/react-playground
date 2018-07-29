import React from 'react';
import Spinner from '../Spinner/Spinner';
import Notice from '../Notice/Notice';

export default ({ product: { model, loading, error } }) => {
  if (loading) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return (
      <Notice type="error" message={error.message}/>
    );
  }

  return (
    <div className="products-item">
      <h3>{model.name}</h3>
      <p>{model.description}</p>
    </div>
  );
};

import React from 'react';
import ProductItem from './ProductItem';
import Spinner from '../Spinner/Spinner';
import Notice from '../Notice/Notice';

export default ({ products: { model, loading, error }, onClick }) => {
  if (loading) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return (
      <Notice type="error" message={error.message} />
    );
  }

  return (
    <div className="products-list">
      {model.map((product) =>
         <ProductItem key={product.id} model={product} onClick={onClick} />)}
    </div>
  );
}

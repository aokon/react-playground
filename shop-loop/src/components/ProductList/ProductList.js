import React from 'react';
import ProductItem from './ProductItem';
import Spinner from '../Spinner/Spinner';
import Notice from '../Notice/Notice';

export default ({ products: { model, loading, error } }) => {
  if (loading) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return (
      <Notice type="error" model={error} />
    );
  }

  return (
    <div className="products-list">
      {model.map((product) => <ProductItem key={product.id} product={product} />)}
    </div>
  );
}

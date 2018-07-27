import React from 'react';
import ProductItem from './ProductItem';
import Spinner from '../Spinner/Spinner';

export default ({ products: { model, loading } }) => {
  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="products-list">
      {model.map((product) => <ProductItem key={product.id} product={product} />)}
    </div>
  );
}

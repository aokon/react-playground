import React from 'react';
import ProductItem from './ProductItem';

export default ({ products: { model, loading } }) => {
  if (loading) {
    return <strong>Loading...</strong>;
  }

  return (
    <div className="products-list">
      {model.map((product) => <ProductItem key={product.id} product={product} />)}
    </div>
  );
}

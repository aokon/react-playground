import React from 'react';
import ProductItem from './ProductItem';

export default ({ products }) => (
  <div className="products-list">
    {products.map((product) => <ProductItem key={product.id} product={product} />)}
  </div>
);

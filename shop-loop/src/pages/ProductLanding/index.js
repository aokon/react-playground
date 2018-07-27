import React from 'react';
import Product from '../../components/Product';

export default ({ match }) => (
  <div className="product-landing">
    <Product id={match.params.id} />
  </div>
);

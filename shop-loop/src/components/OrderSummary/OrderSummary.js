import React from 'react';

const Product = (props) => {
  const { product } = props;

  if (product === undefined) return;

  return (
    <div className="product">
      <h3 className="productName">{product.name}</h3>
      <div className="productPrice">{`${product.price} ${product.currency}`}</div>
    </div>
  );
};

const OrderSummary = (props) => {
  const { products } = props;

  return (
    <div className="orderDetails">
      <h3>Order details:</h3>
      {products.map((product) => <Product key={product.id} product={product} /> )}
    </div>
  );
};

OrderSummary.defaultProps = {
  products: []
};

export default OrderSummary;


import React from 'react';
import { Redirect } from 'react-router-dom';
import CheckoutForm from 'src/components/CheckoutForm/CheckoutForm';
import OrderSummary from 'src/components/OrderSummary/OrderSummary';


const Checkout = (props) => {
  const { cart } = props;
  const products = Object.values(cart)

  if (products.length === 0) {
    return <Redirect to="/" />
  } 

  const onSubmit = (params) => {
    const order = {
      customer: params,
      items: Object.keys(cart)
    };

    props.createOrder(order);
  };

  return (
    <section>
      <h1>Checkout</h1>
      <OrderSummary products={products} />
      <CheckoutForm {...props} onSubmit={onSubmit} />
    </section>
  );
};

Checkout.defaultProps = {
  products: []
};

export default Checkout;


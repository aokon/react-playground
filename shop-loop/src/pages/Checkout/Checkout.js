import React from 'react';
import { Redirect } from 'react-router-dom';
import CheckoutForm from 'src/components/CheckoutForm/CheckoutForm';
import OrderSummary from 'src/components/OrderSummary/OrderSummary';

const Checkout = (props) => {
  const { products } = props;

  if (products.length === 0) {
    return <Redirect to="/" />
  } 

  return (
    <section>
      <h1>Checkout</h1>
      <OrderSummary products={products} />
      <CheckoutForm />
    </section>
  );
};

Checkout.defaultProps = {
  products: []
};

export default Checkout;


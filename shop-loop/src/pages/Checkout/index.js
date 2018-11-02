import { connect } from 'react-redux';
import Checkout from 'src/pages/Checkout/Checkout';
import { createOrder } from 'src/redux/reducers/orders';

const mapStateToProps = state => ({
  cart: state.local.cart
});

const mapDispatchToProps = dispatch => ({
  createOrder: order => dispatch(createOrder(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);


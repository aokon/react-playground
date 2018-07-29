import { connect } from 'react-redux';

import CartList from './CartList';
import { removeFromCart } from '../../redux/reducers/cart';

const mapStateToProps = (state) => ({
  model: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (product) => dispatch(removeFromCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);

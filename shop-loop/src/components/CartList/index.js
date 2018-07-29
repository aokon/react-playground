import { connect } from 'react-redux';

import CartList from './CartList';

const mapStateToProps = (state) => ({
  model: state.cart
})

export default connect(mapStateToProps)(CartList);

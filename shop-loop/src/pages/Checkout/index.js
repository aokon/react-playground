import { connect } from 'react-redux';
import Checkout from 'src/pages/Checkout/Checkout';

const mapStateToProps = state => ({
  products: Object.values(state.local.cart)
});

export default connect(mapStateToProps)(Checkout);


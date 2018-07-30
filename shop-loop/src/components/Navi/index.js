import { connect } from 'react-redux';

import Navi from './Navi';

const mapStateFromProps = (state) => ({
  cart: state.local.cart
});

export default connect(mapStateFromProps)(Navi)

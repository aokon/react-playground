import { connect } from 'react-redux';

import Product           from './Product';
import { productInit }   from '../../redux/reducers/product';
import { addToCart }     from '../../redux/reducers/cart';
import withAsyncResource from '../../hoc/withAsyncResource/withAsyncResource';

const mapStateToProps = (state) => ({
  product: state.product
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (id) => dispatch(productInit(id)),
  onClick: (product) => dispatch(addToCart(product))
});

const connetor = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = ({ id, fetchProduct }) => fetchProduct(id);

export default connetor(withAsyncResource(Product, onDidMount));

import { connect } from 'react-redux';
import Product from './Product';
import withAsyncResource from '../../hoc/withAsyncResource/withAsyncResource';
import { productInit } from '../../redux/reducers/product';

const mapStateToProps = (state) => ({
  product: state.product
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (id) => dispatch(productInit(id))
});

const connetor = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = ({ id, fetchProduct }) => fetchProduct(id);

export default connetor(withAsyncResource(Product, onDidMount));

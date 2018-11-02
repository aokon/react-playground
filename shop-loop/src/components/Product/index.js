import { connect } from 'react-redux';
import Product           from 'src/components/Product/Product';
import { productInit }   from 'src/redux/reducers/product';
import { addToCart }     from 'src/redux/reducers/cart';
import withAsyncResource from 'src/components/withAsyncResource/withAsyncResource';

const mapStateToProps = (state) => ({
  product: state.db.product
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (id) => dispatch(productInit(id)),
  onClick: (product) => dispatch(addToCart(product))
});

const connetor = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = ({ id, fetchProduct }) => fetchProduct(id);

export default connetor(withAsyncResource(Product, onDidMount));

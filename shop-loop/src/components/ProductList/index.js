import { connect } from 'react-redux';

import ProductList       from './ProductList';
import { productsInit }  from '../../redux/reducers/products';
import { addToCart }     from '../../redux/reducers/cart';
import withAsyncResource from '../../hoc/withAsyncResource/withAsyncResource';

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(productsInit()),
  onClick: (product) => dispatch(addToCart(product))
});

const onDidMount = ({ fetchProducts }) => fetchProducts();

const connetor = connect(mapStateToProps, mapDispatchToProps);

export default connetor(withAsyncResource(ProductList, onDidMount));

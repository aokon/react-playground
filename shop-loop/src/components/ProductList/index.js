import { connect } from 'react-redux';
import ProductList from './ProductList';
import withAsyncResource from '../withAsyncResource/withAsyncResource';
import { productsInit } from '../../redux/reducers/products';

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(productsInit())
});

const onDidMount = ({ fetchProducts }) => fetchProducts();

const connetor = connect(mapStateToProps, mapDispatchToProps);

export default connetor(withAsyncResource(ProductList, onDidMount));

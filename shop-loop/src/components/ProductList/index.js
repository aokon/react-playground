import { connect } from 'react-redux';
import ProductList       from 'src/components/ProductList/ProductList';
import { productsInit }  from 'src/redux/reducers/products';
import { addToCart }     from 'src/redux/reducers/cart';
import withAsyncResource from 'src/components/withAsyncResource/withAsyncResource';

const mapStateToProps = (state) => ({
  products: state.db.products
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(productsInit()),
  onClick: (product) => dispatch(addToCart(product))
});

const onDidMount = ({ fetchProducts }) => fetchProducts();

const connetor = connect(mapStateToProps, mapDispatchToProps);

export default connetor(withAsyncResource(ProductList, onDidMount));


import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import { productsInit } from '../../redux/reducers/products';

class ProductListWrapper extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <ProductList {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(productsInit())
});

const connetor = connect(mapStateToProps, mapDispatchToProps);

export default connetor(ProductListWrapper);

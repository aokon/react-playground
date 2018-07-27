import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import { productsInit } from '../../redux/reducers/products';

class ProductListWrapper extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    if (this.props.products.loading) {
      return (
        <strong>Loading...</strong>
      );
    }
    return (
      <ProductList products={this.props.products.model} />
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

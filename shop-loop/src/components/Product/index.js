import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { productInit } from '../../redux/reducers/product';

class ProductWrapper extends Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.id);
  }

  render() {
    return (
      <Product {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (id) => dispatch(productInit(id))
});

const connetor = connect(mapStateToProps, mapDispatchToProps);

export default connetor(ProductWrapper);

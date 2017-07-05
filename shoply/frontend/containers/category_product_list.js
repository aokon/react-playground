import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'

import Spinner from '../components/spinner'
import { fetchCategoryProducts } from '../redux/actions'
import { initStore } from '../redux/store'

class CategoryProductList extends Component {
  componentWillMount() {
    this.props.fetchCategoryProducts(this.props.id)
  }

  componentDidUpdate(prevProps) {
    const id = this.props.id

    if(prevProps.id != id) {
      this.props.fetchCategoryProducts(id)
    }
  }

  renderErrorHandler() {
    return (
      <div className="alert alert--error">{this.props.error}</div>
    )
  }

  renderList() {
    let content = ''

    if(this.props.model) {
      content = this.props.model.map((product) => { 
        return (<h3 key={product.id}>{product.attributes.name}</h3>)
      })
    }

    return (<div className="row">{content}</div>)
  }

  render() {
    let content
    
    if(this.props.error) {
      content = this.renderErrorHandler()
    } else if(this.props.loading) {
      content = <Spinner />
    } else {
      content = this.renderList()
    }

    return content
  }
}

function mapStateToProps(state) {
  const { model, loading, error } = state.products.category

  return { model, loading, error }
}

export default withRedux(initStore, mapStateToProps, { fetchCategoryProducts })(CategoryProductList)
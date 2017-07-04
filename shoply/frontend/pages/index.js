import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'

import Layout from '../components/layout'
import CategoryCard from '../components/category_card'
import Spinner from '../components/spinner'
import { fetchCategories } from '../redux/actions'
import { initStore } from '../redux/store'

class Index extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  renderErrorHandler() {
    return (
      <div className="alert alert--error">{this.props.error}</div>
    )
  }

  renderList() {
    return (
      <div className="row">
        {this.props.model.map((category) => { 
          return <CategoryCard category={category} />
        })}
      </div>
    )
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

    return(
      <Layout title="Shoply">{content}</Layout>
    )
  }
}

function mapStateToProps(state) {
  const { model, loading, error } = state.categories.all

  return { model, loading, error }
}

export default withRedux(initStore, mapStateToProps, { fetchCategories })(Index)
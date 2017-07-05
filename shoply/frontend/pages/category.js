import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'

import Layout from '../components/layout'
import CategorySidebar from '../containers/category_sidebar'
import CategoryProductsList from '../containers/category_product_list'
import { fetchCategory } from '../redux/actions'
import { initStore } from '../redux/store'

class Category extends Component {

  componentWillMount() {
    const id = this.props.url.query.id

    this.props.fetchCategory(id)
  }

  componentDidUpdate(prevProps) {
    const id = this.props.url.query.id

    if(prevProps.url.query.id != id) {
       this.props.fetchCategory(id)
    }
  }

  displayHeader() {
    const category = this.props.category

    if(!category.model) {
      return
    }

    return <h2>Category: {category.model.attributes.name}</h2>
  }

  render() {
    return (
      <Layout>
        <div className="category-view row">
          <div className="col m2">
            <CategorySidebar />
          </div>
          <div className="col m10">
            {this.displayHeader()}
            <CategoryProductsList id={this.props.url.query.id} />
          </div>
        </div>
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return { category: state.categories.category }
}

export default withRedux(initStore, mapStateToProps, { fetchCategory })(Category)
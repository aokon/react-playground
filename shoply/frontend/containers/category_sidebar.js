import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'

import { fetchCategories } from '../redux/actions'
import { initStore } from '../redux/store'

class CategorySidebar extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  renderCategory(category) {
    return (
      <li key={category.id} className="collection-item">
        <Link href={`/category?id=${category.id}`} as={`/category/${category.id}`}>{category.attributes.name}</Link>
      </li>
    )
  }

  render() {
    const categories = this.props.categories
    let content

    if(categories.loading) {
      content = 'Loading...'
    } else if(categories.error) {
      content = 'Sorry, something went wrong'
    } else {
      content = this.props.categories.model.map(this.renderCategory)
    }

    return (
      <ul className="collection">{content}</ul>
    )
  }
}

function mapStateToProps(state) {
  return { categories: state.categories.all }
}

export default withRedux(initStore, mapStateToProps, { fetchCategories })(CategorySidebar)

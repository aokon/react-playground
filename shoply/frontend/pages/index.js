import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'

import Layout from '../components/layout'
import * as actions from '../redux/actions'
import { initStore } from '../redux/store'

class Index extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  renderCategory(category) {
    return (
      <div key={category.id} className="col s12 m6 category-card">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{category.attributes.name}</span>
            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <Link href={`/category?id=${category.id}`} as={`/category/${category.id}`}>Show more</Link>
          </div>
        </div>
      </div>
    );
  }

  renderSpinner() {
    return (
      <div className="spinner-wrapper">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="spinner-label">Loading...</div>
      </div>
    );
  }

  renderErrorHandler() {
    return (
      <div className="alert alert--error">{this.props.error}</div>
    );
  }

  renderList() {
    return (
      <div className="row">
        {this.props.model.map(this.renderCategory)}
      </div>
    );
  }

  render() {
    let content

    if(this.props.error) {
      content = this.renderErrorHandler()
    } else if(this.props.loading) {
      content = this.renderSpinner()
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

export default withRedux(initStore, mapStateToProps, actions)(Index)
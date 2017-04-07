import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router';

import * as actions from '../../actions';

class LandingView extends Component {
  componentWillMount() {
    if(_.isEmpty(this.props.model)) {
      this.props.fetchCategories();
    }
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
            <Link to={`/category/${category.id}`}>Show rentals</Link>
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
    let content;

    if(this.props.error) {
      content = this.renderErrorHandler();
    } else if(this.props.loading) {
      content = this.renderSpinner();
    } else {
      content = this.renderList();
    }

    return (
      <div className="landing-view">
        <h2>Landing</h2>
        {content}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { model, loading, error } = state.categories.all;

  return { model, loading, error };
}

export default connect(mapStateToProps, actions)(LandingView);

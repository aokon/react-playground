import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';

class LandingView extends Component {
  componentWillMount() {
    if(_.isEmpty(this.props.categories)) {
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
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="landing-view">
        <h2>Landing</h2>
        <div className="row">
          {this.props.categories.map(this.renderCategory)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories };
}

export default connect(mapStateToProps, actions)(LandingView);

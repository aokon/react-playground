import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchCategory } from '../actions';

class CategoryView extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchCategory(this.props.params.id);
  }

  displayHeader() {
    const category = this.props.category;

    if(_.isEmpty(category)) {
      return;
    }

    return <h2>Category: {category.attributes.name}</h2>;
  }

  render() {
    return (
      <div className="category-view container">
        <div className="col m2"></div>
        <div className="col m10">
          {this.displayHeader()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.categories.category };
}

export default connect(mapStateToProps, { fetchCategory })(CategoryView);

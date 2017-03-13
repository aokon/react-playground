import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchCategories } from '../actions';

class CategorySidebar extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  renderCategory(category) {
    return (
      <li key={category.id} className="collection-item">
        <Link to={`/category/${category.id}`}>{category.attributes.name}</Link>
      </li>
    );
  }

  render() {
    return (
      <ul className="collection">
        {this.props.categories.map(this.renderCategory)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories.all };
}

export default connect(mapStateToProps, { fetchCategories })(CategorySidebar);

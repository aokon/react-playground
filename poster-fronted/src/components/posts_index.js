import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";

class PostIndex extends Component {
  componentWillMount() { //fires once when component is mounted
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of the posts</div>
    );
  }
}

export default connect(null, { fetchPosts })(PostIndex);

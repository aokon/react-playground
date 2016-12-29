import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import { Link } from "react-router";

class PostIndex extends Component {
  componentWillMount() { //fires once when component is mounted
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h5 className="pull-md-left">{post.title}</h5>
            <span className="pull-md-right">{post.category}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="posts">
        <h3 className="pull-left">Posts</h3>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);

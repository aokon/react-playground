import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { fetchPost } from "../actions/index";

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading....</div>
    }

    return (
      <div className="post-show">
        <h1>{post.title}</h1>
        <div className="text-xs-right">
          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
        </div>
        <h5>Categories {post.category}</h5>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);

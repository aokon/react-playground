import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { fetchPost, deletePost } from "../actions/index";

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    if(confirm("Are you sure?")) {
      this.props.deletePost(this.props.post.id).
        then(() => { this.context.router.push("/"); });
    }
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading....</div>
    }

    return (
      <div className="post-show">
        <h1>
          {post.title}
          <button
            onClick={this.onDeleteClick.bind(this)}
            className="btn btn-danger">Delete</button>
        </h1>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

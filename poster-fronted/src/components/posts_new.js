import React, { Component, PropTypes } from "react";
import { reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { Link } from "react-router";

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props).
      then(() => {
        this.context.router.push("/");
      })
  }

  render() {
    const { fields: { title, content, category }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new Post</h3>
        <div className={`form-group ${title.touched && !title.valid ? 'has-danger' : ''}`}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" className="form-control" {...title} />
          <span className="form-control-feedback">
            {title.touched ? title.error : ''}
          </span>
        </div>
        <div className={`form-group ${category.touched && !category.valid ? 'has-danger' : ''}`}>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" className="form-control" {...category}/>
          <span className="form-control-feedback">
            {category.touched ? category.error : ''}
        </span>
        </div>
        <div className={`form-group ${content.touched && !content.valid ? 'has-danger' : ''}`}>
          <label htmlFor="content">Content:</label>
          <textarea id="content" className="form-control" {...content}/>
          <span className="form-control-feedback">{content.touched ? content.error : ''}</span>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Save</button>
          <Link to="/" className="btn btn-secondary"> Cancel</Link>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "Please provide a title";
  }

  if(!values.category) {
    errors.category = "Please provide a categories";
  }

  if(!values.content) {
    errors.content = "Please provide some content";
  }

  return errors;
}

export default reduxForm({
  form: "PostsNewForm",
  fields: ["title", "category", "content"],
  validate: validate
}, null, { createPost })(PostsNew);

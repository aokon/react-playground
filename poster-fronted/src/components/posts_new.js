import _ from "lodash";
import React, { Component, PropTypes } from "react";
import { reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { Link } from "react-router";

const FORM_FIELDS = {
  title: {
    inputType: "input",
    label: "Title"
  },
  category: {
    inputType: "input",
    label: "Categories:"
  },
  content: {
    inputType: "textarea",
    label: "Content:"
  }
}

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

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div key={field}
        className={`form-group ${fieldHelper.touched && !fieldHelper.valid ? 'has-danger' : ''}`}>
        <label htmlFor={field}>{fieldConfig.label}</label>
        <fieldConfig.inputType type="text" id={field} className="form-control" {...fieldHelper} />
        <span className="form-control-feedback">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </span>
      </div>
    );
  }

  render() {
    const { fields: { title, content, category }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new Post</h3>
        {_.map(FORM_FIELDS, this.renderField.bind(this))}
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

  _.each(FORM_FIELDS, (type, field) => {
    if(!values[field]) {
      errors[field] = `Please provide ${field}`;
    }
  });

  return errors;
}

export default reduxForm({
  form: "PostsNewForm",
  fields: _.keys(FORM_FIELDS),
  validate: validate
}, null, { createPost })(PostsNew);

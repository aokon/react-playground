import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input className="form-control"
          placeholder="Get a forecast in your favourite cities"
          onChange={this.onInputChange}
          value={this.state.term} />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="submit"> Search</button>
        </span>
      </form>
    )
  }
}

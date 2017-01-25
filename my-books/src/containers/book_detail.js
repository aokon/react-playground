import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div className="book-detail">Select a book to get started</div>;
    }

    return (
      <div className="book-detail">
        <h3>Details for: {this.props.book.title}</h3>
        <div className="page-num">Number of pages {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);

import React, { Component } from "react";

import BookList from "../containers/book_list";
import BookDetail from "../containers/book_detail";

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
       <div className="book-app">
          <BookList />
          <BookDetail />
        </div>
    );
  }
}

export default App;

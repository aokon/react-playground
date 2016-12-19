import React, { Component } from "react";

import BookList from "../containers/book_list";

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
       <div className="book-app">
          <BookList />
        </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
       <div className="book-app"></div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

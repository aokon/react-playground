import React, { Component } from "react";
import SearchBar from "../containers/search_bar";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div className="weather-app container">
          <div className="row">
            <div className="col-md-12">
               <SearchBar />
            </div>
          </div>
       </div>
    );
  }
}

export default App;

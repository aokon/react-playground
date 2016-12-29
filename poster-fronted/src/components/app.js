import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.props.children}
            </div>
          </div>
       </div>
    );
  }
}

export default App;

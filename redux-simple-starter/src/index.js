import React from "react";
import ReactDOM from "react-dom";

const API_KEY = process.env.YOUTUBE_API_KEY;

const App = () => {
  return <div>Hi! I'm simple React component</div>;
}

ReactDOM.render(<App />, document.querySelector(".container"));

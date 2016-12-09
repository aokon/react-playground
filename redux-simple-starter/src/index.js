import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideosList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = process.env.YOUTUBE_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "rihana"}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
       <div className="video-app">
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideosList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

import React from "react";
import VideosListItem from "./video_list_item";

const VideosList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideosListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag} />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideosList;

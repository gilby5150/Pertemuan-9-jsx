import React from "react";
import YoutubeSearch from "./YoutubeSearch";
import youtube from "./YoutubeAPIs";
import VideoList from "./YoutubeList";
import VideoDetail from "./YoutubeDetail";
import { useState } from "react";

const YoutubeApp = () => {
    // const [state, setState] = useState({videos:[],selectedVideo:null})
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
//   state = {
//     videos: [],
//     selectedVideo: null,
//   };
 const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    setVideos(
       response.data.items,
    );
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo( video );
  };

  return (
    <div
      className="ui container"
      style={{ marginTop: "1em", background: "#fff" }}
    >
      <YoutubeSearch handleFormSubmit={handleSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              handleVideoSelect={handleVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeApp;

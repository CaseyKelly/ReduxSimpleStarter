import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div className="loader"></div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <h4>{video.snippet.title}</h4>
        <h5>{video.snippet.description}</h5>
      </div>
    </div>
  );
};

export default VideoDetail;
import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <p className='ui header'>{video.snippet.title}</p>
                <p style={{color:'black'}}>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;
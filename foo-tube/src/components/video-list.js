import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = (props) => {
    const videoItems = props.videos.map((d, i) => {
        return <VideoListItem key={d.id.videoId} video={d} onVideoSelect={props.onVideoSelect} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
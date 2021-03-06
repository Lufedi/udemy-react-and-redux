/**
 * Created by luisfediaz on 9/04/17.
 */

import React from 'react';
const VideoListItem = ({video, onVideoSelect}) => {
    //const video = props.video replaced with {video}

    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <img className="media-object" src={imageUrl}/>
            </div>

            <div className="media-body">
                <div className="media-heading"> {video.snippet.title}</div>
            </div>

        </li>
    );
};

export default VideoListItem;

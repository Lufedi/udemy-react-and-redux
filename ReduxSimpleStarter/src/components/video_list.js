/**
 * Created by luisfediaz on 9/04/17.
 */




import React  from 'react';
import VideoListItem from './video_list_item';

const  VideosList = (props) => {

    const videoItems = props.videos.map(
        (video) => {
       return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
    });

  return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>

  );

};

export default VideosList;
import React from 'react';
import { Link } from 'react-router-dom';

class VideoItem extends React.Component {
    render() {
        debugger
        return (
            <Link to={`/videos/${this.props.video.id}`}>
                <h5>{this.props.video.title}</h5>
                <img src={this.props.video.photoUrl} className="video_image"/>
            </Link>
        );
    };
};

export default VideoItem;
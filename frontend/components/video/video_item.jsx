import React from 'react';
import { Link } from 'react-router-dom';

class VideoItem extends React.Component {
    render() {
        // debugger
        return (
            <Link to={`/videos/${this.props.video.id}`}>
                <img src={this.props.video.photoUrl} className="video_image"/>
                <h5 className="vid_index_title">{this.props.video.title}</h5>
                <section className="vid_index_botdesc">
                    <p>1.4M views</p><br/><p>1 day ago</p>
                </section>
            </Link>
        );
    };
};

export default VideoItem;
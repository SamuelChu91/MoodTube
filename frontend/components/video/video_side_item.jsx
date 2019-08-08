import React from 'react';
import { Link } from 'react-router-dom';

class VideoSideItem extends React.Component {
    render() {
        // debugger
        return (
            <Link to={`/videos/${this.props.video.id}`} className="vid_show_side_link">
                <img src={this.props.video.photoUrl} className="video_side_image" />
                <section className="vid_side_caption">
                <h5 className="vid_index_title">{this.props.video.title}</h5>
                    <p className="vid_index_views">1.4M views</p>
                </section>
            </Link>
        );
    };
};

export default VideoSideItem;
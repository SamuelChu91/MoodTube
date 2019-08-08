import React from 'react';
import { Link } from 'react-router-dom';

class VideoItem extends React.Component {
    render() {
        // debugger
        return (
            <div className="vid_item_wrapper">
                <Link to={`/videos/${this.props.video.id}`} className="vid_index">
                    <img src={this.props.video.photoUrl} className="video_image"/>
                    <h5 className="vid_index_title">{this.props.video.title}</h5>
                    <section className="vid_index_botdesc">
                        <p className="vid_index_views">1.4M views</p><p className="vid_index_views">1 day ago</p>
                    </section>
                </Link>
            </div>
        );
    };
};

export default VideoItem;
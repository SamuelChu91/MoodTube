import React from 'react';

class VideoShowItem extends React.Component {
    render() {
        // debugger
        return (
            <div>
                <h2>{this.props.video.title}</h2>
                {/* <img src={this.props.video.videoUrl} className="video_vid" /> */}
            </div>
        );
    };
};

export default VideoShowItem;
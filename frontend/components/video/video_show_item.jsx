import React from 'react';

class VideoShowItem extends React.Component {
    render() {
        debugger
        if (!this.props.video) {return null};
        return (
            <div>
                {/* <h1>please</h1> */}
                <h2>{this.props.video.title}</h2>
                {/* <video src={this.props.video.videoUrl} className="video_vid" /> */}
                <video src="https://youtu.be/P-3GOo_nWoc"></video>
            </div>
        );
    };
};

export default VideoShowItem;
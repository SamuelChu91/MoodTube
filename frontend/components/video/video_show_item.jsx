import React from 'react';

class VideoShowItem extends React.Component {
    render() {
        // debugger
        if (!this.props.video) {return null};
        return (
            <div>
                <video src=""></video>
                {/* <h1>please</h1> */}
                <h2>{this.props.video.title}</h2>
                    <p>{this.props.video.description}</p>
                {/* <video src={this.props.video.videoUrl} className="video_vid" /> */}
            </div>
        );
    };
};

export default VideoShowItem;
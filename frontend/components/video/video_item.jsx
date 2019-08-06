import React from 'react';

class VideoItem extends React.Component {
    render() {
        // debugger
        return (
            <div>
                <h1>{this.props.video.title}</h1>
                <img src={this.props.video.photoUrl}/>
            </div>
        );
    };
};

export default VideoItem;
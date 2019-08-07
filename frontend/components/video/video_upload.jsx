import React from 'react';

class VideoUpload extends React.Component {

    render () {
        return (
            <div>
                <label>
                    <input onClick={this.props.upload} type="file" accept="video/mp4,video/x-m4v,video/*" />
                    <i className="fas fa-arrow-alt-circle-up"></i>
                    <p>Select Files to Upload</p>
                    <p>Or Drag and Drop Video Files</p>
                </label>
                <button>Public</button>
            </div>
        )
    }
}

export default VideoUpload;
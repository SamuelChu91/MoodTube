import React from 'react';

class VideoShowItem extends React.Component {
    render() {
        // debugger
        if (!this.props.video) {return null};
        return (
            <div>
                <video width="650" height="375" src="https://moodtube-seeds.s3.amazonaws.com/free_pup.mp4" controls autoPlay className="vid_player"></video>
                {/* <h1>please</h1> */}
                <h2 className="vid_title">{this.props.video.title}</h2>
                <br/>
                <p className="vid_views">91 Views</p>
                <br/>
                <div>
                    <section className="">

                    </section>
                    <p className="vid_description">{this.props.video.description}</p>
                </div>
                {/* <video src={this.props.video.videoUrl} className="video_vid" /> */}
            </div>
        );
    };
};

export default VideoShowItem;
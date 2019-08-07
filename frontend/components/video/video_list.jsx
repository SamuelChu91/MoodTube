import React from 'react';
import VideoItem from './video_item';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.showVids();
    }

    render() {
        const listOfVideos = this.props.videos.map((video, idx) =>{
            // debugger
            return (
                <li key={video.id} className="vid_index_vid"><VideoItem video={video} /></li>
            );
        });
        
        return (
            <div>
                    <h2>Trending</h2>
                <ul className="vid_index_row">
                    {listOfVideos}
                </ul>
            </div>
        )
    }
}

export default VideoList;
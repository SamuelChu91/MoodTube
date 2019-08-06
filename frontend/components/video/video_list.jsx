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
        const listOfVideos = this.props.videos.map((video, idx) =>
        <li><VideoItem video={video} key={idx}/></li>);
        
        return (
            <div>
                <ul>
                    {listOfVideos}
                </ul>
            </div>
        )
    }
}

export default VideoList;
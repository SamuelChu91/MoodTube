import React from 'react';
import VideoShowItem from './video_show_item';
import HeaderNavContainer from '../header/header_nav_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.showVid(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <header>
                    <HeaderNavContainer />
                </header>
                <div>
                    <VideoShowItem />
                </div>
            </div>
        )
    }
}

export default VideoShow;
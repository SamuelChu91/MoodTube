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
        // let video = this.props.video || null;
        // if (!this.props.video) {return null};
        // debugger
        return (
            <div>
                <header>
                    <HeaderNavContainer />
                </header>
                <div className="show_body_window">
                    <VideoShowItem video={this.props.video} />
                </div>
            </div>
        )
    }
}

export default VideoShow;
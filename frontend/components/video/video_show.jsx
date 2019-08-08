import React from 'react';
import VideoShowItem from './video_show_item';
import HeaderNavContainer from '../header/header_nav_container';
import VideoSideItem from './video_side_item';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);

        this.shuffle = this.shuffle.bind(this);
    }

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    componentDidMount() {
        this.props.showVid(this.props.match.params.id);
        this.props.showVids();
    }

    render() {

        const sideRandom = this.shuffle(this.props.videos);
        
        const sideList = sideRandom.map((video) => {
            return (
                <li key={video.id} className="vid_index_vid"><VideoSideItem video={video} /></li>
            );
        });
        // debugger
        return (
            <div>
                <header className="show_top_bar">
                    <HeaderNavContainer />
                </header>
                <div className="show_body_window">
                    <VideoShowItem video={this.props.video} />
                    <div>
                        <div className="show_side_header">
                            <p className="show_side_header_up">Up next</p>
                            <p className="show_side_header_auto">AUTOPLAY</p>
                        </div>
                        <ul className="show_side_vids">
                            {sideList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow;
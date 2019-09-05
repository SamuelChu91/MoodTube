import React from 'react';
import VideoShowItem from './video_show_item';
import VideoSideItem from './video_side_item';
import { connect } from 'react-redux';
import { showVids, searchVids } from '../../actions/video_actions';
import { withRouter } from 'react-router';

class VideoSearch extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     videos: [],
        // };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        // this.props.showVids();
        this.props.search(`${this.props.title}`);
        window.scrollTo(0,0);
    }

    componentDidUpdate(prevProps) {
        // this.props.showVids();
        // debugger
        if (prevProps.match.params.title !== this.props.match.params.title) {
            this.props.search(`${this.props.title}`);
        }
        window.scrollTo(0, 0);
    }

    render() {
        const results = this.props.videos;
        // const resultVids = results.filter((video) => {
        //     return video.title.includes(this.props.title)
        // });

        let resultList;
        if (results === undefined) {
        } else if (Object.keys(results).length > 0) {
            resultList = Object.values(results).map((video) => {
                return (
                    <li key={video.id}><VideoSideItem video={video} /></li>
                )
            })
        }

        return (
            <div className="show_window">
                <ul className="vid_search_list">
                    {resultList}
                </ul>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return ({
        // video: state.videos[ownProps.match.params.id],
        videos: state.videos.result,
        title: ownProps.match.params.title,
        // comment: state.comments[ownProps.match.params.id],
    });
    // debugger
};

const mdp = (dispatch, ownProps) => {
    return ({
        // showVid: (id) => dispatch(showVid(id)),
        search: (title) => dispatch(searchVids(title)),
        showVids: () => dispatch(showVids()),
    });
};

export default withRouter(connect(msp, mdp)(VideoSearch));
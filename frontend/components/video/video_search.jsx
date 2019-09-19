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
    };

    componentDidMount() {
        // this.props.showVids();
        this.props.search(`${this.props.title}`);
        window.scrollTo(0,0);
    };

    componentDidUpdate(prevProps) {
        // this.props.showVids();
        // to search from search page
        if (prevProps.match.params.title !== this.props.match.params.title) {
            this.props.search(`${this.props.title}`);
        };
        window.scrollTo(0, 0);
    };

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
        } else if (Object.keys(results).length === 0) {
            resultList = <img src={window.NoResults} alt=""/>
            // resultList = <p>test</p>
        };

        return (
            <div className="show_window">
                <div className="search_wrapper">
                    <div className="home_body_icons">
                        <a href="https://github.com/SamuelChu91">
                            <i className="fab fa-github nav_upload"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/samuel-chu-8a6259119/">
                            <i className="fab fa-linkedin-in nav_upload"></i>
                        </a>
                        <a href="https://twitter.com/Chuuperlol">
                            <i className="fab fa-twitter nav_upload"></i>
                        </a>
                        <a href="https://www.facebook.com/Chuuperlol">
                            <i className="fab fa-facebook-f nav_upload"></i>
                        </a>
                    </div>
                    <ul className="vid_search_list">
                        <p className="search_header">Search Results</p>
                        {resultList}
                    </ul>
                </div>
            </div>
        )
    };
};

const msp = (state, ownProps) => {
    return ({
        // video: state.videos[ownProps.match.params.id],
        videos: state.videos.result,
        title: ownProps.match.params.title,
        // comment: state.comments[ownProps.match.params.id],
    });
};

const mdp = (dispatch, ownProps) => {
    return ({
        // showVid: (id) => dispatch(showVid(id)),
        search: (title) => dispatch(searchVids(title)),
        showVids: () => dispatch(showVids()),
    });
};

export default withRouter(connect(msp, mdp)(VideoSearch));
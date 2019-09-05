import { connect } from 'react-redux';
import { showVid, showVids } from '../../actions/video_actions';
import VideoShow from './video_show';

const msp = (state, ownProps) => {
    return ({
        video: state.videos[ownProps.match.params.id],
        videos: Object.values(state.videos),
        // comment: state.comments[ownProps.match.params.id],
    });
};

const mdp = (dispatch, ownProps) => {
    return ({
        showVid: (id) => dispatch(showVid(id)),
        showVids: () => dispatch(showVids()),
    });
};

export default connect(msp, mdp)(VideoShow);
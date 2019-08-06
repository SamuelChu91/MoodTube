import { connect } from 'react-redux';
import { showVids } from '../../actions/video_actions';
import VideoList from './video_list';

const msp = (state, ownProps) => {
    return ({
        videos: Object.values(state.videos),
    });
};

const mdp = (dispatch, ownProps) => {
    return ({
        showVids: () => dispatch(showVids()),
    });
};

export default connect(msp, mdp)(VideoList);
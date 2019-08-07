import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoUpload from './video_upload';
import { receiveVideo } from '../../actions/video_actions';

// const msp = (state, ownProps) => {

// }

const mdp = (dispatch, ownProps) => {
    return {
        upload: video => dispatch(receiveVideo(video)),
    }
}

export default connect(null, mdp)(VideoUpload);
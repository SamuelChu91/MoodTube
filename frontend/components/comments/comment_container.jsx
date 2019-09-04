import { connect } from 'react-redux';
import Comment from './comment_form';
import { withRouter } from 'react-router';
import { showComments, createComment, editComment, deleteComment } from '../../actions/comment_actions';

const msp = state => {
    // debugger
    return {
        currentUser: state.session.user,
        logged_in: Boolean(state.session.user),
        users: state.users,
    }
};

const mdp = dispatch => {
    return {
        // logout: () => dispatch(logout())
        showComments: (video_id) => dispatch(showComments(video_id)),
        createComment: (comment) => dispatch(createComment(comment)),
        editComment: (comment) => dispatch(editComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
    }
};

export default withRouter(connect(msp, mdp)(Comment));

// videos should also grab comments, other data because
// they all show up on the video
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showComments, createComment, editComment, deleteComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    logged_in: Boolean(state.session.user),
    users: state.users,
    videoId: ownProps.match.params.id,
  };
};

const mdp = dispatch => {
  return {
    showComments: (video_id) => dispatch(showComments(video_id)),
    createComment: (comment) => dispatch(createComment(comment)),
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
  };
};

export default withRouter(connect(msp, mdp)(CommentForm));

// videos should also grab comments, other data because
// they all show up on the video
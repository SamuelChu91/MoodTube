import { merge } from 'lodash';
import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_VIDEOS } from '../actions/video_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return merge({}, )
        case RECEIVE_COMMENTS:
            return merge({}, state, action.comments);
        case RECEIVE_COMMENT:
            return merge({}, state, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default commentsReducer;
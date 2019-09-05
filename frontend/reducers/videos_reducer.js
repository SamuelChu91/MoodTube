import { merge } from 'lodash';
import { RECEIVE_VIDEO, REMOVE_VIDEO, RECEIVE_VIDEOS, SEARCH_VIDEOS } from '../actions/video_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
         
        case RECEIVE_VIDEOS:
            return merge({}, state, action.videos);
        case RECEIVE_VIDEO:
            return merge({}, state, { [action.video.id]: action.video });
        case REMOVE_VIDEO:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        case SEARCH_VIDEOS: {
            return merge({}, { ["result"]: action.videos})
        }
        case RECEIVE_COMMENT: {
            const video = merge({}, state[action.comment.videoId]);
            video.comments = merge({}, video.comments, { [action.comment.id]: action.comment })
            return merge({}, state, { [video.id]: video });
        }
        default:
            return state;
    }
};

export default videosReducer;
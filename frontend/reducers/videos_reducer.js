import { merge } from 'lodash';
import { RECEIVE_VIDEO, REMOVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return merge({}, state, { [action.video.id]: action.video });
        case REMOVE_VIDEO:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default videosReducer;
import { merge } from 'lodash';
import { RECEIVE_VIDEO, DELETE_VIDEO } from '../actions/video_actions';

const videoReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO:
            return merge({}, state, { [action.video.id]: action.video });
        case DELETE_VIDEO:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default videoReducer;
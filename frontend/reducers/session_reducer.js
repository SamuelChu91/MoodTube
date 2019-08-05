import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
    user: null,
}

export const sessionReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER: {
            // return Object.assign({}, { id: action.user.id });
            // debugger
            return merge({}, { user: action.user });
        }
        case LOGOUT_CURRENT_USER: {
            return defaultState;
        }
        default:
            return oldState;
    }
};


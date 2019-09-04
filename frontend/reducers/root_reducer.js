import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import  usersReducer  from './users_reducer';
import errorsReducer from './errors_reducer';
import videosReducer from './videos_reducer';
import commentsReducer from './comments_reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
    errors: errorsReducer,
    videos: videosReducer,
    comments: commentsReducer,
});

export default rootReducer;

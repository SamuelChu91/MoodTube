import * as CommentApUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";
// export const EDIT_COMMENT = "EDIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment,
    };
};

export const removeComment = (id) => {
    return {
        type: REMOVE_COMMENT,
        id,
    };
};

export const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments,
    };
};

// export const editComments = (comment) => {
//     return {
//         type: EDIT_COMMENT,
//         comment,
//     };
// };

export const showComments = (video_id) => dispatch => {
    return CommentApUtil.receiveComments(video_id)
        .then(comments => {
            return(
                dispatch(receiveComments(comments))
            );
        });
};

export const createComment = (comment) => dispatch => {
    return CommentApUtil.createComment(comment)
        .then(comment => {
            return (
                dispatch(receiveComment(comment))
            );
        });
};

export const editComment = (comment) => dispatch => {
    return CommentApUtil.editComment(comment)
        .then(comment => {
            return (
                dispatch(editComment(comment))
            );
        });
};

export const deleteComment = (comment) => dispatch => {
    return CommentApUtil.deleteComment(comment)
        .then(comment => {
            return (
                dispatch(deleteComment(comment))
            );
        });
};
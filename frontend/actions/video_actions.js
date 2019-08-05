import * as VideoApUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const UPLOAD_VIDEO = "UPLOAD_VIDEO";
export const EDIT_VIDEO = "EDIT_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";

export const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video,
});

export const deleteVideo = (id) => ({
    type: DELETE_VIDEO,
    id,
});

export const uploadVideo = (video) => dispatch => {
    return VideoApUtil.uploadVideo(video)
        .then(video => dispatch(receiveVideo(video)));
};

export const deleteVideo = () => dispatch => {
    return VideoApUtil.deleteVideo(id)
        .then(id => dispatch(deleteVideo(id)));
};
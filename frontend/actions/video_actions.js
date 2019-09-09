import * as VideoApUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const UPLOAD_VIDEO = "UPLOAD_VIDEO";
export const EDIT_VIDEO = "EDIT_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const SEARCH_VIDEOS = "SEARCH_VIDEOS";

export const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video,
});

export const removeVideo = (id) => ({
    type: REMOVE_VIDEO,
    id,
});

export const receiveVideos = (videos) => ({
    type: RECEIVE_VIDEOS,
    videos,
});

export const searchVideos = (videos) => ({
    type: SEARCH_VIDEOS,
    videos,
});


export const showVids = () => dispatch => {
    return VideoApUtil.receiveVideos()
        .then(videos => {
            return(
                dispatch(receiveVideos(videos))
            );
        });
};

export const showVid = (id) => dispatch => {
    return VideoApUtil.receiveVideo(id)
        .then(video => dispatch(receiveVideo(video)));
};

export const uploadVideo = (video) => dispatch => {
    return VideoApUtil.uploadVideo(video)
        .then(video => dispatch(receiveVideo(video)));
};

export const deleteVideo = (id) => dispatch => {
    return VideoApUtil.deleteVideo(id)
        .then(id => dispatch(removeVideo(id)));
};

export const searchVids = (title) => dispatch => {
    return VideoApUtil.searchVideos(title)
        .then(videos => dispatch(searchVideos(videos)));
};

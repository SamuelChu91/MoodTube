export const receiveComments = (video_id) => {
    return $.ajax({
        method: 'GET',
        url: `api/videos/${video_id}/comments`
    })
}

export const receiveComment = (video_id) => {
    return $.ajax({
        method: 'GET',
        url: `api/videos/${video_id}/comments`,
    })
}

export const createComment = (comment) => {
    return $.ajax({
        method: 'POST',
        url: `api/videos/${comment.video_id}/comments`,
        data: { comment }
    })
}

export const editComment = (comment) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/videos/${comment.video.id}/comments/${comment.id}/edit`,
        data: { comment }
    })
}

export const deleteComment = (comment) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/videos/${comment.video_id}/comments/${comment.id}`
    })
}

// setup modlels control routes db

// jbuilder views ajax

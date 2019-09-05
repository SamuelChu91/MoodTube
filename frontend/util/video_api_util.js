export const receiveVideos = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/videos'
    })
}

export const receiveVideo = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/videos/${id}`,
    })
}

export const uploadVideo = (video) => {
    return $.ajax({
        method: 'POST',
        url: `api/videos/${video.id}`,
        data: { video }
    })
}

export const editVideo = (video) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/videos/${video.id}`,
        data: { video }
    })
}

export const deleteVideo = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/videos/${id}`,
    })
}

export const searchVideos = (title) => {
   
    return $.ajax({
        method: 'GET',
        url: `api/videos/search/${title}`,
       
    })
}
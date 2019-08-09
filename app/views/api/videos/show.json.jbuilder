json.extract! @video, :id, :title, :description
json.vidUrl url_for(@video.id)

# json.photoUrl url_for(video.vid)
# show the video
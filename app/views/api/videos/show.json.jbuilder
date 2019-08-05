json.array! @videos do |video|
    json.extract! video, :title, :description
    json.photoUrl url_for(video.pic)
end
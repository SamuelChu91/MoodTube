json.array! @videos do |video|
    # debugger
    json.extract! video, :id, :title, :description
    json.photoUrl url_for(video.pic)
    # video.pic.service_url
end

# attach, then save!
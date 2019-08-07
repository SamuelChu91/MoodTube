@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description
        json.photoUrl url_for(video.pic)
    end
    # video.pic.service_url
end

# attach, then save!

json.extract! @video, :id, :title, :description
json.vidUrl url_for(@video.vid)

json.comments do
    @video.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :video_id, :author_id
            json.username comment.user.username
        end
    end
end

# json."keyname" same thing as extract!
# setting key into object state
# get rail routes, append /api to url for jbuilder information

# json.photoUrl url_for(video.vid)
# show the video

# @videos.each do |video|
#     json.set! video.id do
#         json.extract! video, :id, :title, :description
#         json.photoUrl url_for(video.pic)
#         json.videoUrl url_for(video.vid)
#     end
#     # video.pic.service_url
# end
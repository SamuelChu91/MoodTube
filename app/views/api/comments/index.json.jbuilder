json.comments do 
    @comments.each do |comment| 
        json.set! comment.id do 
            json.extract! comment, :id, :body
            json.videoId comment.video_id
            json.authorId comment.author_id
        end
    end
end
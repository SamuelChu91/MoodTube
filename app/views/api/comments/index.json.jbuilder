json.comments do 
    @comments.each do |comment| 
        json.set! comment.id do 
            json.extract! comment, :id, :body
            json.video_id comment.video_id
            json.author_id comment.author_id
            json.username comment.user.username
        end
    end
end
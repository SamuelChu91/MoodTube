json.extract! @comment, :id, :body, :video_id, :author_id
# json.video_id @comment.video_id
# json.author_id @comment.author_id
json.username @comment.user.username


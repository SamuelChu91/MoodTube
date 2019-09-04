class Api::CommentsController < ApplicationController
    before_action :ensure_logged_in, only: [:new, :create, :destroy, :edit]

    # def new
    #     @comment = Comment.new(video_id: params[:video_id])
    #     render :new
    # end

    def index
        @video = Video.find(params[:video_id])
        if @video
            @comments = @video.comments
            render :index
        end
    end

    def create
        @video = Video.find(params[:video_id])
        if @video
            @comment = @video.comments.new(comment_params)
            @comment.author_id = current_user.id
            @comment.likes = 0
            @comment.dislikes = 0
            if @comment.save
                render :show
            else
                render json: @comment.errors.full_messages, status: 422
            end
        end
    end

    def edit
        @comment = Comment.find(params[:id])
        render :edit
    end
    
    def destroy
        @comment = Comment.find(params[:id])
        if @comment && @comment.author_id === current_user.id
            @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def comment_params
        params.require(:comment).permit(:body, :author_id, :video_id)
    end
end
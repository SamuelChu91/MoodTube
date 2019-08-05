class Api::VideosController < ApplicationController
    def index
        @videos = Video.all
        render :index
    end

    def create
        @video = Video.new(video_params)
        if @video.save
            render json: {message: "New Video"}
        else
            render json: video.errors.full_messages
        end
    end
    
    def video_params
        params.require(:video).permit(:title, :description)
    end
end
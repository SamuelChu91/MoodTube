class Api::VideosController < ApplicationController
    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end
    
    def create
        @video = Video.new(video_params)
        if @video.save
            render json: {message: "New Video"}
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def edit
        @video = Video.find(params[:id])
        render :edit
    end

    def update
        @video = Video.find(params[:id])
        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = Video.find(params[:id])
        if @video.destroy
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end
    
    # need video id and title string param
    # pass in string as wild car showing up in url
    def search
        # debugger
        title = params[:title]

        # debugger
        @videos = Video.where('title ILIKE ?', "%#{title}%")

        if @videos.nil?
            render json: "No results found"
        else
            # render "api/videos/search"
            render :index
        end
    end
    
    def video_params
        params.require(:video).permit(:title, :description, :poster_id, :string)
    end
end
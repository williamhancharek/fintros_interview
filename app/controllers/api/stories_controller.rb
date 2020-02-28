class Api::StoriesController < ApplicationController

    def index
        @stories = Story.all
        render json: @stories
    end

    def create
        @story = Story.new(story_params)
        if @story.save
            render json: @story, status: :created
        else
            render json: @story.errors, status: :unprocessable_entity
        end
    end


    private

    def story_params
        params.require(:story).permit(:title, :url)
    end
end

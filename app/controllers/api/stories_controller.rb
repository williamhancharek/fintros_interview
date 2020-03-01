class Api::StoriesController < ApplicationController

    def index
        @hasMoreItems = true
        @offset = params[:offset]
        
        if @offset then
            @offset = @offset.to_i
            @stories = Story.limit(30).offset(@offset)
            
            if Story.all.count > @offset + 30 then
                @nextOffset = @offset + 30
            else
                @hasMoreItems = false
            end
        else
            @stories = Story.limit(30)
            @nextOffset = 30
        end
        

        render json: {:stories=>@stories, :nextOffset=>@nextOffset, :hasMoreItems=>@hasMoreItems}
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

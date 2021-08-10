class Api::PositionsController < ApplicationController

    def create
        @position = Position.new(position_params)
        if @position.save
            render "api/positions/show"
        else
            render ["Something went wrong"]
        end
    end

    private

    def position_params
        params.require(:position).permit(:acct_id, :symbol, :shares, :price)
    end
end

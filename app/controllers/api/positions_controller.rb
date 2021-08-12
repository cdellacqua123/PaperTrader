require 'byebug'
class Api::PositionsController < ApplicationController

    def create
        @position = Position.new(position_params)
        byebug
        @account = Account.find_by(id: params[:position][:acct_id])
        if @account.equities.length == 0
            if @position.save
                @account.balance += (@position.shares * @position.price)
                @account.equities.push(@position.id)
                @account.save
                render "api/positions/show"
            else
                render ["Something went wrong"]
            end
        else
            @acctPositions = Position.select{|pos| pos.acct_id == @account.id}
            i = 0
            while i < @acctPositions.length
                if @acctPositions[i].symbol == @position.symbol
                    @position.save
                    @accountPositions[i].shares += @position.shares
                    @accountPositions[i].save!
                    i += @acctPositions.length
                    render "api/positions/show"
                elsif ((i == @acctPositions.length - 1) && (@acctPositions[i].symbol != @position.symbol))
                    @position.save
                    @acctPositions[i].shares += @position.shares
                    @acctPositions[i].save!
                    i += @acctPositions.length
                    render "api/positions/show"
                else
                    i += 1
                end
            end
        end        
    end

    private

    def position_params
        params.require(:position).permit(:acct_id, :symbol, :shares, :price)
    end
end

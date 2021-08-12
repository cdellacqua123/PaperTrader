class Api::PositionsController < ApplicationController

    def create
        @position = Position.new(position_params)
        @account = Account.find_by(id: params[:position][:acct_id])
        if @account.equities.length == 0
            if @position.save
                @account.balance += (@position.shares * @position.price * -1).round(2)
                @account.equities.push(@position.id)
                @account.save
                render "api/positions/show"
            else
                render ["Something went wrong"]
            end
        else
            @accountPositions = Position.select{|pos| pos.acct_id == @account.id}
            i = 0
            while i < @accountPositions.length
                if @accountPositions[i].symbol == @position.symbol
                    
                    @accountPositions[i].shares += @position.shares
                    @account.balance += (@position.shares * @position.price * -1).round(2)
                    @accountPositions[i].save!
                    @account.save!
                    i += @accountPositions.length
                    render "api/positions/show"
                elsif ((i == @accountPositions.length - 1) && (@accountPositions[i].symbol != @position.symbol))
                    @position.save
                    @account.equities.push(@position.id)
                    @account.balance += (@position.shares * @position.price * -1).round(2)
                    @account.save!
                    i += @accountPositions.length
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

class Api::PositionsController < ApplicationController

    def create
        @position = Position.new(position_params)
        @account = Account.find_by(id: params[:position][:acct_id])
        if @account.equities.length == 0
            if @position.save
                @account.balance += (@position.shares * @position.price * -1).round(2)
                @account.equities.push(@position.id)
                @account.balance = @account.balance.round(2)
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
                    @account.balance = @account.balance.round(2)
                    if @accountPositions[i].shares == 0
                        @accountPositions[i].destroy
                        @account.equities = @account.equities.select{|acct_pos_id| acct_pos_id != @accountPositions[i].id}
                        @account.save
                        i += @accountPositions.length
                        render "api/positions/show"
                    else 
                        @accountPositions[i].save
                        @account.save
                        i += @accountPositions.length
                        render "api/positions/show"
                    end
                elsif ((i == @accountPositions.length - 1) && (@accountPositions[i].symbol != @position.symbol))
                    @position.save
                    @account.equities.push(@position.id)
                    @account.balance += (@position.shares * @position.price * -1).round(2)
                    @account.balance = @account.balance.round(2)
                    @account.save
                    i += @accountPositions.length
                    render "api/positions/show"
                else
                    i += 1
                end
            end
        end        
    end

    def show
        @account = Account.find(params[:id])
        if @account.positions.length > 0
            # @positions = Position.select{ |pos| pos.acct_id == @account.id}
            @positions = @account.positions
            render "api/positions/index"
        else
            render json: @account.errors.full_messages, status: 404
        end
    end

    private

    def position_params
        params.require(:position).permit(:acct_id, :symbol, :shares, :price)
    end
end

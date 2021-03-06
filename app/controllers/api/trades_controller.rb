class Api::TradesController < ApplicationController

    def create
        @trade = Trade.new(trade_params)
        @account = Account.find_by(id: params[:trade][:acc_id])
        if @trade.save
            @account.trade_hist.push(@trade.id)
            @account.save!
            render "api/trades/show"
        else
            render ["Something went wrong"]
        end
    end

    def show
        @account = Account.find(params[:id])
        if @account.trades.length > 0
            @trades = @account.trades
            render "api/trades/index"
        else
            render json: @account.errors.full_messages, status: 404
        end
    end

    private

    def trade_params
        params.require(:trade).permit(:acc_id, :action, 
        :ticker, :num_shares, :fill_price, :total_dr_cr)
    end
end

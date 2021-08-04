class Api::AccountsController < ApplicationController
    def create
        @account = Account.new(account_params)
        @account.user_id = params[:user_id]
        if @account.save
            render :show
        else
            render json: @account.errors.full_messages, status: 401
        end
    end

    def update
        @account = Account.find(params[:id])
        if @account.update(account_params)
            render :show
        else
            render json: @account.errors.full_messages, status: 401
        end
    end

    private
    def account_params
        params.require(:account).permit(:account_name, :balance, :shorting_allowed)
    end
end

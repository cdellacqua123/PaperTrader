class Api::AccountsController < ApplicationController
    
    def create
        @account = Account.new(account_params)
        if @account.save!
            render 'api/accounts/show'
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
    
    def index
        @user = User.find_by(id: params[:userId])
        @accounts = Account.select{|account| account.user_id == @user.id}
        if @accounts
            render 'api/accounts/index'
        else
            render ["No accounts!"]
        end
    end

    def destroy
        @account = Account.find(params[:id])
        Trade.where(acc_id: @account.id).delete_all
        Position.where(acct_id: @account.id).delete_all
        @account.delete
    end

    private
    def account_params
        params.require(:account).permit(:account_name, :balance, :shorting_allowed, :user_id)
    end
end

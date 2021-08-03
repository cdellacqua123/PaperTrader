class Api::SessionController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:users][:username]
            params[:users][:password]
        )

        if @user
            login(@user)
            render :show
        else
            render json: ["invalid username or password"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render '/'
        else
            render json: ['Account not signed in'], status: 404
    end
end

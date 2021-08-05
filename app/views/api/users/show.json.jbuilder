json.partial! "api/users/user", user: @user

json.accounts do
    @user.accounts.each do |account|
        json.set! account.id do
            json.extract! account, :account_name, :balance, :equities
        end
    end
end
    
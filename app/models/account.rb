class Account < ApplicationRecord
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :positions,
        foreign_key: :acct_id,
        class_name: :Position

    has_many :trades,
        foreign_key: :acc_id,
        class_name: :Trade
end

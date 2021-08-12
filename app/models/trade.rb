class Trade < ApplicationRecord
    belongs_to :account,
        foreign_key: :acc_id,
        class_name: :Account
end

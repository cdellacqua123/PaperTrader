class Position < ApplicationRecord
        belongs_to :account,
        foreign_key: :acct_id,
        class_name: :Account
end

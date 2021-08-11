class Position < ApplicationRecord
        belongs_to :account,
        foreign_key: :acct_id,
        source: :Account
end

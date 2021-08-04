class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.integer :user_id, null: false
      t.string :account_name, null: false
      t.integer :balance, null: false
      t.integer :equities, array: true, default: []
      t.integer :trade_hist, array: true, default: []
      t.boolean :shorting_allowed
      t.timestamps
    end
    add_index :accounts, :user_id
  end
end

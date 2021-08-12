class CreateTrades < ActiveRecord::Migration[5.2]
  def change
    create_table :trades do |t|
      t.integer :acc_id, null: false
      t.string :action, null: false
      t.string :ticker, null: false
      t.integer :num_shares, null: false
      t.integer :fill_price, null: false
      t.integer :total_dr_cr, null: false
      t.timestamps
    end
    add_index :trades, :acc_id
  end
end

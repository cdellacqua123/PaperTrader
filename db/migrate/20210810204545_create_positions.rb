class CreatePositions < ActiveRecord::Migration[5.2]
  def change
    create_table :positions do |t|
      t.integer :acct_id, null: false
      t.string :symbol, null: false
      t.integer :shares, null: false
      t.integer :price, null: false
      t.timestamps
    end
    add_index :positions, :acct_id
  end
end

class ChangeIntToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :accounts, :balance, :float
    change_column :positions, :price, :float
    change_column :trades, :fill_price, :float
    change_column :trades, :total_dr_cr, :float
  end
end

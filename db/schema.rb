# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_10_204627) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "account_name", null: false
    t.integer "balance", null: false
    t.integer "equities", default: [], array: true
    t.integer "trade_hist", default: [], array: true
    t.boolean "shorting_allowed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_accounts_on_user_id"
  end

  create_table "positions", force: :cascade do |t|
    t.integer "acct_id", null: false
    t.string "symbol", null: false
    t.integer "shares", null: false
    t.integer "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["acct_id"], name: "index_positions_on_acct_id"
  end

  create_table "trades", force: :cascade do |t|
    t.integer "acc_id", null: false
    t.string "action", null: false
    t.string "ticker", null: false
    t.integer "num_shares", null: false
    t.integer "fill_price", null: false
    t.integer "total_dr_cr", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["acc_id"], name: "index_trades_on_acc_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end

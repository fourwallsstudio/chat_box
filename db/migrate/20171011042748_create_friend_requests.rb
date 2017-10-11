class CreateFriendRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :friend_requests do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.boolean :accepted, default: false

      t.timestamps
    end

    add_index :friend_requests, [:user_id, :friend_id], unique: true
  end
end

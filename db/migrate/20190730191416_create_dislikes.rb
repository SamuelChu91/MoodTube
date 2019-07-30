class CreateDislikes < ActiveRecord::Migration[5.2]
  def change
    create_table :dislikes do |t|
      t.integer :video_count, null: false
      t.integer :comment_count, null: false
      t.integer :video_id, null: false
      t.integer :comment_id, null: false
      t.timestamps
    end
    add_index :dislikes, :video_id
    add_index :dislikes, :comment_id
  end
end

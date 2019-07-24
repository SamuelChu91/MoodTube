class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :poster_id, null: false

      t.timestamps

    end
    add_index :videos, :title
    add_index :videos, :poster_id
  end
end

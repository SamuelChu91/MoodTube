class AddColumnsToVideos < ActiveRecord::Migration[5.2]
  def change
      add_column :videos, :likes, :integer
      add_column :videos, :dislikes, :integer
  end
end

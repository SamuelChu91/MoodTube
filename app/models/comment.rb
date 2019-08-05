# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  likes      :integer          not null
#  dislikes   :integer          not null
#  author_id  :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, presence: true

    belongs_to :user
    belongs_to :video
    
end

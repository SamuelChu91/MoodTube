# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  poster_id   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  likes       :integer
#  dislikes    :integer
#

class Video < ApplicationRecord
    validates :title, :description, :poster_id, presence: true
    # validate :ensure_video
    
    has_many :comments
    
    belongs_to :user,
    foreign_key: :poster_id,
    primary_key: :id,
    class_name: :User

    has_one_attached :pic

    # def ensure_video
    #     unless self.pic.attached?
    #         errors[:photo] << "must be attached"
    #     end
    # end
end

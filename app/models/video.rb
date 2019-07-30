class Video < ApplicationRecord
    validates :title, :description, presence: true

    has_many :comments
    belongs_to :user

    
end
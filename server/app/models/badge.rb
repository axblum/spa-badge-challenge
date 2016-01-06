class Badge < ActiveRecord::Base
  belongs_to :student
  has_many :votes

  # method to add votes
end

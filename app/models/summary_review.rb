class SummaryReview < ApplicationRecord
  validates :body, presence: true

  belongs_to :summary
  belongs_to :user
end
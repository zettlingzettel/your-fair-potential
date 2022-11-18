class Summary <ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  validates :api_doi, presence: true

  belongs_to :user
end
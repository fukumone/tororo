class Article < ApplicationRecord
  validates :name, :body, presence: true
end

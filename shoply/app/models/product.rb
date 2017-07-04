class Product < ApplicationRecord
  belongs_to :category

  scope :for_category, ->(id) { where(category_id: id) }
end

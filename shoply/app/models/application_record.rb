class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.default_scope
    order(:created_at)
  end
end

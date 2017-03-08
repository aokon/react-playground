require "rails_helper"

RSpec.describe API::V1::CategoriesController, type: :api do

  context 'index' do
    before do
      create_list(:category, 2)
      get 'http://api.example.com/v1/categories'
    end

    it_returns_status(200)

    it_returns_collection_attributes(
      resource: 'categories', attrs: [
        :id, :name, :created_at, :updated_at
      ]
    )
  end
end

require "rails_helper"

RSpec.describe API::V1::CategoriesController, type: :api do

  describe 'index' do
    before do
      create_list(:category, 2)

      get '/v1/categories'
    end

    it_behaves_like 'success request'
    it_behaves_like 'collection with valid items number', results_number: 2
    it_behaves_like 'collection with valid item format',
      attributes: [:name, :'created-at', :'updated-at']
  end

  describe 'show' do
    context 'record exists' do
      let!(:category) { create(:category) }

      before {
        get "/v1/categories/#{category.id}"
      }

      it_behaves_like 'success request'
      it_behaves_like 'resource with valid format',
        attributes: [:name, :'created-at', :'updated-at']
    end

    context 'record not found' do
      before { get '/v1/categories/12312-asdasd-123123' }

      it_behaves_like 'not found resource'
    end
  end
end

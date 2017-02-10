require "rails_helper"

RSpec.describe API::V1::StatusesController, type: :request do
  before { host! "api.example.com" }

  it "returns proper health care message" do
    get "/v1/status"

    json_response = json(response.body)

    expect(json_response).to eq(HealthCheck::HEALTH_RESPONSE)
  end
end

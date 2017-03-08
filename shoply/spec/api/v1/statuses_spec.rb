require "rails_helper"

RSpec.describe API::V1::StatusesController, type: :api do

  it "returns proper health care message" do
    get "/v1/status"

    json_response = json_body(last_response.body)

    expect(json_response).to eq(HealthCheck::HEALTH_RESPONSE)
  end
end

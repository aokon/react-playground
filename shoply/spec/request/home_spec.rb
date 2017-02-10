require "rails_helper"

RSpec.describe HomeController, type: :request do
  it "returns 200" do
    get "/"

    expect(response).to have_http_status(:success)
  end

  it "renders valid template" do
    get "/"

    expect(response).to render_template(:index)
  end
end

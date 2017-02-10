require "rails_helper"

RSpec.describe HealthCheck, type: :service do
  it "return valid response" do
    expect(HealthCheck.new.()).to eq(HealthCheck::HEALTH_RESPONSE)
  end

  it "runs query which test db connection" do
    allow(ActiveRecord::Base.connection).to receive(:execute).with("SELECT 1")

    HealthCheck.new.()
  end
end

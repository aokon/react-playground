class API::V1::StatusesController < API::ApplicationController
  def show
    render json: HealthCheck.new.()
  end
end

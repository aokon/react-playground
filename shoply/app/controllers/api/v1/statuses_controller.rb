class API::V1::StatusesController < API::V1::BaseController
  def show
    render json: HealthCheck.new.()
  end
end

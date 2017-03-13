class API::V1::BaseController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found

  private

  def handle_not_found(exception)
    response_body = { status: 404, title: 'Record not found' }
    render json: { errors: response_body }, status: :not_found
  end
end

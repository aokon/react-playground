class API::V1::ProductsController < API::V1::BaseController
  def index
    render json: load_products, each_serializer: API::V1::ProductSerializer
  end

  private

  def load_products
    category_id = params[:filter][:category_id]
    products = ::Product.all
    products.for_category(category_id)  if category_id
  end
end
class API::V1::ProductsController < API::V1::BaseController
  def index
    render json: load_products, each_serializer: API::V1::ProductSerializer
  end

  private

  def load_products
    products = ::Product.all

    if params[:filter]
      filters = API::V1::ProductsFiltersValidator.(params[:filter].to_unsafe_h)
      products = products.for_category(filters.output[:category_id])  if filters.output[:category_id] 
    end

    products
  end
end
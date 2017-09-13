API::V1::ProductsFiltersValidator =  Dry::Validation.Form do
  optional(:category_id).filled(:str?)
end
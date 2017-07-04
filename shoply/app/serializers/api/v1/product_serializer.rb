class API::V1::ProductSerializer < API::V1::BaseSerializer
  attributes(*::Product.attribute_names.map(&:to_sym))
end
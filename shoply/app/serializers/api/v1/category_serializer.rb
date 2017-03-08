class API::V1::CategorySerializer < API::V1::BaseSerializer
  attributes(*::Category.attribute_names.map(&:to_sym))
end

API::V1::CategoryValidator =  Dry::Validation.Form do
  required(:name).filled(:str?)
end

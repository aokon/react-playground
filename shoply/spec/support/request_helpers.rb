module RequestHelpers
  def json(json_body)
    JSON.parse(json_body, symbolize_names: true)
  end
end

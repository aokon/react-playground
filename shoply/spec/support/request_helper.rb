module RequestHelper
  def json_body(json_body)
    JSON.parse(json_body, symbolize_names: true)
  end
end

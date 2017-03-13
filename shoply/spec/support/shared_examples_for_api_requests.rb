Rspec.shared_examples 'success request' do
  it 'returns 200 http status' do
    expect(last_response.status).to eq(200)
  end
end

Rspec.shared_examples 'not found resource' do
  it 'returns 404 http status' do
    expect(last_response.status).to eq(404)
  end

  it 'returns valid error response' do
    response_body = json_body(last_response.body)[:errors]

    expect(response_body).to eq(status: 404, title: 'Record not found')
  end
end

Rspec.shared_examples 'collection with valid items number' do |options|
  it 'returns valid number of results' do
    results = json_body(last_response.body)[:data];

    expect(results.size).to eq(options[:results_number])
  end
end

Rspec.shared_examples 'collection with valid item format' do |options|
  it 'returns response with valid item format' do
    record = json_body(last_response.body)[:data].first;

    expect(record.keys).to include(:id, :type, :attributes)
    expect(record[:attributes].keys).to include(*options[:attributes])
  end
end

Rspec.shared_examples 'resource with valid format' do |options|
  it 'returns response with valid item format' do
    record = json_body(last_response.body)[:data];

    expect(record.keys).to include(:id, :type, :attributes)
    expect(record[:attributes].keys).to include(*options[:attributes])
  end
end

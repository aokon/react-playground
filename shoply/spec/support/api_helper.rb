module ApiHelper
  include Rack::Test::Methods

  def app
    Rails.application
  end

  def build_rack_mock_session
    Rack::MockSession.new(app, 'api.myapp.com')
  end
end

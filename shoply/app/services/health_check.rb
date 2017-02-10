class HealthCheck
  HEALTH_RESPONSE = { message: "OK"}.freeze

  def call
    ActiveRecord::Base.connection.execute "SELECT 1"
    HEALTH_RESPONSE
  end
end

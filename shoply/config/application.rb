require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Shoply
  class Application < Rails::Application
    ADDITIONAL_NAMESPACES = %w(services serializers operations validators)

    ADDITIONAL_NAMESPACES.each do |namespace|
      config.autoload_paths << Rails.root.join('app' , namespace)
    end

    config.active_record.primary_key = :uuid
  end
end

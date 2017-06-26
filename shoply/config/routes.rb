Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, path: "", constraints: { subdomain: "api" },
    defaults: { format: :json} do

    namespace :v1 do
      resource :status, only: [:show]
      resources :categories
    end
  end
end

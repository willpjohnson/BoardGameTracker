Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :new]
    resources :users, only: [:create, :show]
    resources :users do
      resources :catan_games, only: [:index]
    end

    resources :catan_games, only: [:show]
  end

  root "static_pages#root"
end

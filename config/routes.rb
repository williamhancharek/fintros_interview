Rails.application.routes.draw do

  root to: 'home#index'

  namespace :api do
    resources :stories, only: [:index, :create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end

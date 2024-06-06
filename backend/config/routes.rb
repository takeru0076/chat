Rails.application.routes.draw do
  get 'up' => 'rails/health#show', as: :rails_health_check

  get '/api/test', to: 'application#test'
  resources :rooms, only: %i[index create]
end

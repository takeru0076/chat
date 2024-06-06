Rails.application.routes.draw do
  get '/api/test', to: 'application#test'

  resources :rooms, only: %i[index create] do
    resources :messages, only: %i[index create]
  end
end

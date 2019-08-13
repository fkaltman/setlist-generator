Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :setlists do
    resources :songs
  end
  resources :songs
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # Below is a route for GET requests to the /randomSongs endpoint
  # whici directs the request to the song controller and the random
  # songs list method
  # api call to method in the controller
  get '/randomSongLists', to: 'songs#random_songs_list'
  get '/randomSong', to: 'songs#random_songs'
  resources :setlists do
    resources :songs
  end
  resources :songs
  
  # Fallback route for React Router (SPA)
  get '*path', to: 'application#fallback_index_html', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end

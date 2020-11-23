Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

#   get '/listings', to: 'listings#index'

#  post '/listings'  => 'listings#create' 
#   get '/listings/:id', to: 'listings#show' 
#   delete '/listings/:id', to: 'listings#destroy'



  resources :listings, only: [:index, :show, :create, :destroy]

  

end


Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/listings'  => 'listings#index' 
  #get '/listings', to: 'listings#index'
#resources:listings, only: :index 

 post '/listings'  => 'listings#create' 
  get '/listings/:id'  => 'listings#show'
  #get '/listings/:id', to: 'listings#show'
  get '/listings:id/edit'  => 'listings#edit' 
  get '/listings/:id'  => 'listings#update' 
  delete '/listings/:id', to: 'listings#destroy'
  



  # resources :listings
  # get '/businesses'  => 'businesses#' 
  # get '/homeservices'  => 'homeservices#' 

end


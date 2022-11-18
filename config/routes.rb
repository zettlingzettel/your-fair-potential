Rails.application.routes.draw do

  root 'static_pages#index'
  devise_for :users

  get "/articles", to: "static_pages#index"
  get '/articles/:doi_pt1/:doi_pt2', to: "static_pages#index", constraints: { doi_pt1: /[^\/]+/ , doi_pt2: /[^\/]+/}


  namespace :api do
    namespace :v1 do
      # resources :articles, only: [:index]
      get "/articles/search", to: "articles#search"
      get "/articles/find_articles", to: "articles#find_articles"
      
      # post "/articles/find_articles", to: "articles#find_articles"
    end
  end
end
Rails.application.routes.draw do

  root 'static_pages#index'
  devise_for :users

  get "/articles", to: "static_pages#index"
  get "/summaries", to: "static_pages#index"
  get '/articles/:doi_pt1/:doi_pt2', to: "static_pages#index", constraints: { doi_pt1: /[^\/]+/ , doi_pt2: /[^\/]+/}


  namespace :api do
    namespace :v1 do
      get "/articles/search", to: "articles#search"
      get "/articles/find_articles", to: "articles#find_articles"
      post "/articles/:doi_pt1/:doi_pt2/summary_reviews", to: "summary_reviews#create", constraints: { doi_pt1: /[^\/]+/ , doi_pt2: /[^\/]+/}
    
      get "/summaries/index", to: "summaries#index"
    end
  end
end
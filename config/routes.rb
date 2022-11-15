Rails.application.routes.draw do

  root 'static_pages#index'
  devise_for :users

  get "/articles", to: "static_pages#index"
  # get '/articles/:id', to: "static_pages#index"

  # require_relative "../app/lib/ApiFetcher"
  namespace :api do
    namespace :v1 do
      resources :articles
    end
  end
end
  
  # namespace :api do
  #   namespace :v2 do
  #     namespace :articles do
  #     unpaywall_client = ApiFetcher.new
  #     article_all_data = unpaywall_client.retrieve_articles("well-being")
  #     content_type :json
  #     json(article_all_data)
  #     end
  #   end
  # end
# end
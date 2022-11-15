class Api::V1::ArticlesController < ApiController
  def index
    require_relative "../../../lib/ApiFetcherIndex.rb"
    unpaywall_client = ApiFetcherIndex.new
    articles_list = unpaywall_client.retrieve_articles("happiness")
    render json: { data: articles_list }
  end
end
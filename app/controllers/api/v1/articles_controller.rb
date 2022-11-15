class Api::V1::ArticlesController < ApiController
  def index
    require_relative "../../../lib/ApiFetcherIndex.rb"
    unpaywall_client = ApiFetcherIndex.new
    articles_list = unpaywall_client.retrieve_articles("well-being")
    render json: { data: articles_list }
  end
end
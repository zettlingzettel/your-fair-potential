class Api::V1::ArticlesController < ApiController
  def index
    require_relative "../../../lib/ApiFetcherIndex.rb"
    unpaywall_client = ApiFetcherIndex.new
    articles_list = unpaywall_client.retrieve_articles("happiness")
    render json: { data: articles_list }
  end

  def search
    require_relative "../../../lib/ApiFetcher.rb"
    unpaywall_client_article = ApiFetcher.new
    # article_info = unpaywall_client_article.retrieve_article("10.1007/s11205-008-9323-7")
    article_info = unpaywall_client_article.retrieve_article("10.1038/nature12373")
    
    # article_info = unpaywall_client.retrieve_article(`#{params["first"]}/#{params["second"]}`)
    render json: { data: article_info }
  end
end
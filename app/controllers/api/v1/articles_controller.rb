class Api::V1::ArticlesController < ApiController

  def find_articles
    query = params[:search]
    require_relative "../../../services/ApiFetcherIndex.rb"
    unpaywall_client = ApiFetcherIndex.new
    articles_list = unpaywall_client.retrieve_articles(query)
    render json: { data: articles_list }
  end
  
  def search
    require_relative "../../../services/ApiFetcher.rb"
    unpaywall_client_article = ApiFetcher.new
    article_info = unpaywall_client_article.retrieve_article("#{params["first"]}/#{params["second"]}")
    summary = Summary.where(api_doi: "#{params["first"]}/#{params["second"]}")
    no_article = {data: "no summary is provided"}.to_json
    if !summary.empty?
      render json: { data: article_info, summary: summary}
    else 
      render json: { data: article_info, summary: {}}
    end
  end
end
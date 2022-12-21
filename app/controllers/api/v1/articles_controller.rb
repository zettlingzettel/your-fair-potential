class Api::V1::ArticlesController < ApiController

  def find_articles
    query = params[:search]
    require_relative "../../../services/ApiFetcherIndex.rb"
    unpaywall_client = ApiFetcherIndex.new
    articles_list = unpaywall_client.retrieve_articles(query)
    render json: { data: articles_list }
    # render json: { data: articles_list }, serializer: ArticleIndexSerializer
  end
  
  def search
    require_relative "../../../services/ApiFetcher.rb"
    # fetching the article
    unpaywall_client_article = ApiFetcher.new
    article_info = unpaywall_client_article.retrieve_article("#{params["first"]}/#{params["second"]}")
    # fetching the summary
    summary = Summary.where(api_doi: "#{params["first"]}/#{params["second"]}")

    # no_summary = {data: "no summary is provided"}.to_json

    # fetching the article reviews
    # article_reviews = ArticleReview.where(api_doi: "#{params["first"]}/#{params["second"]}")

    # fetching the summary reviews
    summary_reviews = SummaryReview.where(summary_id: summary.ids)
    
    # rendering the data 
    if !summary.empty?
      render json: { data: article_info, summary: summary, summary_reviews: summary_reviews}
    else 
      render json: { data: article_info, summary: {}, summary_reviews: []}
    end
  end
end
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

    # fetching the article reviews
    article_reviews = ArticleReview.where(api_doi: "#{params["first"]}/#{params["second"]}")
    # fetching the summary reviews
    summary_reviews = SummaryReview.where(summary_id: summary.ids)
    
    # rendering the data 
    if !summary.empty? && !article_reviews.empty?
      render json: { data: article_info, article_reviews: article_reviews, summary: summary, summary_reviews: summary_reviews}
    elsif !article_reviews.empty? && summary.empty
      render json: { data: article_info, article_reviews: article_reviews, summary: {}, summary_reviews: []}
    elsif article_reviews.empty? && !summary.empty
      render json: { data: article_info, article_reviews: [], summary: summary, summary_reviews: summary_reviews}
    else
      render json: { data: article_info, article_reviews: [], summary: {}, summary_reviews: []}
    end
  end
end
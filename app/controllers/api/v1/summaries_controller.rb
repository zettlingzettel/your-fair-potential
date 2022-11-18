class Api::V1::SummariesController < ApiController
  def show
    summary = Summary.where(api_doi: "#{params["first"]}/#{params["second"]}")
    no_article = {data: "no article is provided"}.to_json
      if !summary.empty?
        render json: summary
      else 
        render json: no_article
      end
  end
end
class Api::V1::SummariesController < ApiController
  def show
    summary = Summary.where(api_doi: "#{params["first"]}/#{params["second"]}")
      render json: summary
  end
end
class Api::V1::SummaryReviewsController < ApiController
  def create
    summary = Summary.where(api_doi: "#{params["doi_pt1"]}/#{params["doi_pt2"]}")
    review = SummaryReview.new(review_params)
    review.summary = summary[0]
    review.user = current_user    
    
    if review.save
      render json: review
    else
      render json: {errors: review.errors.full_messages}
    end
  end

  private
  def review_params
    params.permit(:body)
  end
end
# class Api::V1::ReviewsController < ApiController
#   def create
#     review = Review.new(review_params)
#     article = Article.where(api: "#{params["first"]}/#{params["second"]}")
#     review.article = article
#     review.user = current_user

#     if review.save
#       render json: review
#     else
#       render json {errors: review.errors.full_messages}
#     end
#   end

#   private
#   def review_params
#     params.require(:review).permit(:title, :body)
#   end
# end
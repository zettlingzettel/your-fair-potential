class ApiController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  protected
  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end
end
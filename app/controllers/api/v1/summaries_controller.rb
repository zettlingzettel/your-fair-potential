class Api::V1::SummariesController < ApiController

  def index
    summaries_all = Summary.all
    summaries = summaries_all.reverse
    render json: { summaries: summaries}
  end

  def find_summaries
    query = params[:search]    
    
    summaries_list = Summary.where("title like?", "%#{query}%")
    render json: { data: summaries_list }
  end

  def add_summary

  end
end
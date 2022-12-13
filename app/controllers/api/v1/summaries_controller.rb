class Api::V1::SummariesController < ApiController

  def index
    summaries_all = Summary.all
    summaries = summaries_all.reverse
    render json: { summaries: summaries}
  end

  def find_summaries
    binding.pry
    query = params[:search]
    summaries = Summary.all
    summaries_list = summaries.include?(query)
    render json: { data: summaries_list }
  end

  

end
class Api::V1::SummariesController < ApiController

  def index
    summaries = Summary.all
    render json: { summaries: summaries}
  end

  

end
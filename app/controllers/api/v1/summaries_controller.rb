class Api::V1::SummariesController < ApiController

  def index
    summaries_all = Summary.all
    summaries = summaries_all.reverse
    render json: { summaries: summaries}
  end

  

end
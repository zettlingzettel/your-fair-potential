class ApiFetcher
  # doi query: 
  # BASE_URL_WHOLE = "https://api.unpaywall.org/v2/#{query}?email=#{ENV[UNPAYWALL_API_KEY]}"
  BASE_URL_START = "https://api.unpaywall.org/v2/"
  BASE_URL_END = "?email=#{ENV['UNPAYWALL_API_KEY']}"

  attr_reader :article_info
  def initialize
    @article_data = {}
  end

  def retrieve_articles(query_by_doi)
    dataFromUnpaywall = unpaywall_request(query_by_doi)
    return @article_data = article_info(dataFromUnpaywall)
  end

  def unpaywall_request(query_by_doi)
    response = Faraday.get("#{BASE_URL_START}#{query_by_doi}#{BASE_URL_END}")
    return JSON.parse(response.body)
  end

  def article_info(parsedUnpaywallData)
    error = []

    if parsedUnpaywallData["error"] == true
      message = parsedUnpaywallData["message"]
      has_error = true
      error << message
    end

    if parsedUnpaywallData["title"] 
      @article_data["genre"] = parsedUnpaywallData["genre"]
      @article_data["title"] = parsedUnpaywallData["title"]
      @article_data["doi"] = parsedUnpaywallData["doi"]
      @article_data["year"] = parsedUnpaywallData["year"]
      # @article_data["journal_name"] = parsedUnpaywallData["journal_name"]
      # @article_data["url_for_landing_page"] = parsedUnpaywallData["best_oa_location"]["url_for_landing_page"]
      # @article_data["url_for_pdf"] = parsedUnpaywallData["best_oa_location"]["url_for_pdf"]
      @article_data["authors"] = parsedUnpaywallData["z_authors"]
    end

    if has_error == true
      return error
    end

    if has_error == nil
      return ( @article_data)
    end
  end
end
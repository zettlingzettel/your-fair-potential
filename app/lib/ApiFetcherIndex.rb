class ApiFetcherIndex

  # WORD QUERY
  # https://api.unpaywall.org/v2/search?query=cell%20thermometry&is_oa=true&email=unpaywall_01@example.com
  BASE_URL_QUERY_BY_WORD_START = "https://api.unpaywall.org/v2/search?query="
  BASE_URL_WORD_QUERY_BY_WORD_END = "&is_oa=true&email=#{ENV['UNPAYWALL_API_KEY']}"
  # space = %20

  attr_reader :article_info
  def initialize
    @articles_data = []
  end

  def retrieve_articles(query_by_word)
    dataFromUnpaywall = unpaywall_request(query_by_word)
    return @articles_data = article_info(dataFromUnpaywall)
  end

  def unpaywall_request(query_by_word)
    response = Faraday.get("#{BASE_URL_QUERY_BY_WORD_START}#{query_by_word}#{BASE_URL_WORD_QUERY_BY_WORD_END}")
    return JSON.parse(response.body)
  end

  def article_info(parsedUnpaywallData)
    list_articles_data = []
    parsedUnpaywallData["results"].each do |response|
      article_data = {}
      if response["response"]["title"] != nil
        article_data["genre"] = response["response"]["genre"]
        article_data["title"] = response["response"]["title"]
        article_data["doi"] = response["response"]["doi"]
        article_data["year"] = response["response"]["year"]
        # article_data["journal_name"] = response["response"]["journal_name"]
        # article_data["url_for_landing_page"] = response["response"]["best_oa_location"]["url_for_landing_page"]
        # article_data["url_for_pdf"] = response["response"]["best_oa_location"]["url_for_pdf"]
        # article_data["authors"] = response["response"]["z_authors"]
        list_articles_data.push(article_data)
      end
    end
    return list_articles_data
  end
end

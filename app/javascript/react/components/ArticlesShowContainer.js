import React, { useState, useEffect } from 'react'
import ArticleShowTile from './ArticleShowTile'
import SummaryShowTile from './SummaryShowTile' 

  const ArticleShowContainer = (props) => {

    const [article, setArticle] = useState({
      article_authors: []
    })
    const [summary, setSummary] = useState({})
    let noData = ""

    const fetchArticle = async () => {
      try {
        const response = await fetch(`/api/v1/articles/search?first=${props.match.params.doi_pt1}&second=${props.match.params.doi_pt2}`)
        if(!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error (errorMessage)
          throw(error)
        } else {
          const parsedArticle = await response.json()
          setArticle({...parsedArticle.data,
            article_authors: article.article_authors.concat(parsedArticle.data.authors)})
          }
        } catch (err) {
          console.error(`Error in Fetch: ${err.message}`)
        }
      }
      
      const fetchSummary = async () => {
        try {
          const response = await fetch(`/api/v1/articles/summaries?first=${props.match.params.doi_pt1}&second=${props.match.params.doi_pt2}`)
          if(!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error (errorMessage)
            throw(error)

          } else {
            const parsedSummary = await response.json()
            if (parsedSummary.data === 'no article is provided') {
              noData = parsedSummary.data
            } else {
              setSummary({...parsedSummary[0]})
            }
        }
      } catch(error) {
        console.log(`Error in Fetch: ${error.message}`)
      }
    }
    
    useEffect (() => {
      fetchArticle()
      fetchSummary()
    }, [])

      return (
        <div>
          <ArticleShowTile 
          title = {article.title}
          genre = {article.genre}
          year = {article.year}
          doi = {article.doi}
          journal_name = {article.journal_name}
          url_for_landing_page = {article.url_for_landing_page}
          url_for_pdf = {article.url_for_pdf}
          authors = {article.article_authors}
          />

          <SummaryShowTile 
            key = {summary.api_doi}
            summary = {summary}
          />
        </div>
        )
      }
      
export default ArticleShowContainer
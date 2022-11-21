import React, { useState, useEffect } from 'react'
import ArticleShowTile from './ArticleShowTile'
import _ from 'lodash'
import SummaryShowTile from './SummaryShowTile' 

  const ArticleShowContainer = (props) => {
    const [article, setArticle] = useState({
      article_authors: [],
      summary: {}
    })
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
            article_authors: parsedArticle.data.authors,
            summary: parsedArticle.summary})
        }
      } catch (err) {
        console.error(`Error in Fetch: ${err.message}`)
      }
    }
    
    let summaryShow = <div> No summary is provided</div>
    if (_.isEmpty(article.summary[0]) === false) {
      summaryShow = 
        <SummaryShowTile 
          key = {article.summary[0].api_doi}
          summary = {article.summary[0]}
        />
    } 

    useEffect (() => {
      fetchArticle()
    }, [])
                    
    return (
      <div>
      <h1>Article</h1>
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
      <h1>Summary</h1>
        {summaryShow}
      <h1>Comments to the article</h1>
    </div>
        )
      }
      
export default ArticleShowContainer
import React, { useState, useEffect } from 'react'
import ArticleShowTile from './ArticleShowTile'
import _ from 'lodash'
import SummaryShowTile from './SummaryShowTile' 
import SummaryReviewShow from './SummaryReviewShow'
// import ArticleReviewForm from './ArticleReviewForm'
// import SummaryReviewForm from './SummaryReviewForm'

const ArticleShowContainer = (props) => {
    const [article, setArticle] = useState({
      article_authors: [],
      summary: {},
      summary_reviews: []
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
            summary: parsedArticle.summary,
            summary_reviews: parsedArticle.summary_reviews
          })
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

    let summaryReviewShow = <div>No comments yet! Be the first to comment!</div>
    // debugger
    if (_.isEmpty(article.summary_reviews) === false) {
      summaryReviewShow = article.summary_reviews.map((summary) => {
        return (
          <div key={summary.id}>
            <SummaryReviewShow 
            summary={summary}/>
          </div>
          )
        }) 
    }
    
    useEffect (() => {
      fetchArticle()
    }, [])
    
    return (
      <div>
      <h1>Article</h1>
      <ArticleShowTile 
        title={article.title}
        genre={article.genre}
        year={article.year}
        doi={article.doi}
        journal_name={article.journal_name}
        url_for_landing_page={article.url_for_landing_page}
        url_for_pdf={article.url_for_pdf}
        authors={article.article_authors}
      />
      <h1>Summary</h1>
      {summaryShow}
      <h1>Notes to the article 
        <br/> * In Progress *</h1>
      {/* <div><ArticleReviewForm /></div> */}
      {/*  <div><SummaryReviewForm /></div> */}
      <h1>Comments to the article 
        <br />* In Progress * </h1> 
      <h1>Comments to the summary</h1>
      {summaryReviewShow}
      {/* {ReviewShowData} */}

    </div>
        )
      }
      
export default ArticleShowContainer
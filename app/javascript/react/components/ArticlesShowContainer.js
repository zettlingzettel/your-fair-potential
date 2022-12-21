import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import ArticleShowTile from './ArticleShowTile'
import SummaryShowTile from './SummaryShowTile' 

// import ArticleReviewForm from './ArticleReviewForm'
import ArticleReviewTile from './ArticleReviewTile'

import SummaryReviewForm from './SummaryReviewForm'
import SummaryReviewTile from './SummaryReviewTile'



const ArticleShowContainer = (props) => {
  
  const [article, setArticle] = useState({
    authors: [],
    summary: [],
    article_reviews: [],
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
            summary: parsedArticle.summary[0],
            summary_reviews: parsedArticle.summary_reviews,
            article_reviews: parsedArticle.article_reviews
          })
        }
      } catch (err) {
        console.error(`Error in Fetch: ${err.message}`)
      }
    }
    debugger
    let summaryShow = <div className="custom-text"> No summary is provided</div>
    if (_.isEmpty(article.summary) === false) {
      summaryShow = 
      <SummaryShowTile 
      key = {article.summary.api_doi}
      summary = {article.summary}
      />
    } 

    let sum_ind = 0
    let summaryShowData 
    if (article.summary != undefined) {
    summaryShowData = <div className="div-landing-padding">No comments yet! Be the first to comment!</div>
    }
    if (_.isEmpty(article.summary_reviews) === false) {
      summaryShowData = article.summary_reviews.map((summary) => {
        sum_ind++
        return (
           <div className="grid-x grid-margin-x custom-font div-show-padding" key={sum_ind}>
            <SummaryReviewTile 
              summary={summary}/>
          </div>
          )
        }) 
      }
      
      useEffect (() => {
        fetchArticle()
      }, [])

      return (
        <div className="custom-font">
          <h1 className="violet-text left-padding-2" >Article</h1>
          <div>  
            <ArticleShowTile 
              title={article.title}
              genre={article.genre}
              year={article.year}
              doi={article.doi}
              authors={article.authors}
              journal_name={article.journal_name}
              url_for_landing_page={article.url_for_landing_page}
              url_for_pdf={article.url_for_pdf}
            />
            </div>
            <div className="div-landing-padding">
              <h1 className="violet-text">Summary</h1>
              {summaryShow}
            </div>
            <div>    
              <h1 className="violet-text div-landing-padding">Notes to the article 
                <br/> * In Progress *</h1>
            </div>
            <div>
              <h1 className="violet-text div-landing-padding">Comments to the article </h1>
              {/* <ArticleReviewForm /> */}
              <ArticleReviewTile 
              />
            </div>
               
            <div>
              <h1 className="violet-text div-landing-padding">Comments to the summary</h1>
                <SummaryReviewForm 
                match_pt1={props.match.params.doi_pt1}
                match_pt2={props.match.params.doi_pt2}
                article={article}
                setArticle={setArticle}
                />
                {summaryShowData}
            </div>
    </div>
        )
      }
      
export default ArticleShowContainer
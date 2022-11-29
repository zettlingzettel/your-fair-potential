import React, { useState } from 'react'
import { Link } from "react-router-dom"

import SearchBar from './SearchBar.js'
import ArticleIndexTile from './ArticleIndexTile.js'

  const ArticleIndexContainer = (props) => {
    const [articles, setArticles] = useState([])
    
    let list
    if (articles.length > 0) {
      list = <h1 className="form-index-margin custom-font violet-text cell small-12 medium-12 large-12 ">List of articles</h1>
    }

    const IndexArticleTiles = articles.map((article) => {
      return (
        <div key={article.doi}>
          <ArticleIndexTile
          doi = {article.doi}
          genre = {article.genre}
          title = {article.title}
          year = {article.year}
          />
        </div>
      )
    })

    return (
      <div className="grid-x grid-margin-x div-landing-padding custom-font"> 
        <Link to={'/articles/10.1037/vio0000019'} className="cell small-12 medium-12 large-12 to-align-center custom-link">
          Click me to see an example article
        </Link>
        <div className="to-align-center form-index-margin custom-font">
          <SearchBar 
          articles = {articles}
          setArticles = {setArticles}/>
        </div>
        <div className="grid-x grid-margin-x div-landing-padding custom-font">
        {list}
        {IndexArticleTiles}
        </div>
      </div>)
}
      
export default ArticleIndexContainer
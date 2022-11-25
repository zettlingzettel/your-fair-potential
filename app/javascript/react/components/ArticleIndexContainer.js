import React, { useState } from 'react'
import { Link } from "react-router-dom"

import SearchBar from './SearchBar.js'
import ArticleIndexTile from './ArticleIndexTile.js'

  const ArticleIndexContainer = (props) => {
    const [articles, setArticles] = useState([])
    
    let list
    if (articles.length > 0) {
      list = <h1>List of articles</h1>
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
      <div>
        <Link to={'/articles/10.1037/vio0000019'}>
          Example of the article
        </Link>
        <SearchBar 
        articles = {articles}
        setArticles = {setArticles}/>
        {list}
        <div>
        {IndexArticleTiles}
        </div>
      </div>)
}
      
export default ArticleIndexContainer
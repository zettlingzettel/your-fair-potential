import React, { useState } from 'react'
import SearchBar from './SearchBar'
import IndexArticleTile from './IndexArticleTile'

  const ArticleIndexContainer = (props) => {
    const [articles, setArticles] = useState([])
    
    let list
    if (articles.length > 0) {
      list = <h1>List of articles</h1>
    }

    const IndexArticleTiles = articles.map((article) => {
      return (
        <div>
          <IndexArticleTile
          key = {article.doi}
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
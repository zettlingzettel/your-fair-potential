import React, { useState } from 'react'
import SearchBar from './SearchBar'
import IndexArticleTile from './IndexArticleTile'

  const ArticleIndexContainer = (props) => {
    const [articles, setArticles] = useState([])
    
    debugger
    const IndexArticleTiles = articles.map((article) => {
      return (
        <IndexArticleTile
        key = {article.doi}
        doi = {article.doi}
        genre = {article.genre}
        title = {article.title}
        year = {article.year}
        />
      )
    })

    return (
      <div>
        <SearchBar 
        articles = {articles}
        setArticles = {setArticles}/>
        
        <h1>List of articles</h1>
        <div>
        {IndexArticleTiles}
        </div>
      </div>)
}
      
export default ArticleIndexContainer
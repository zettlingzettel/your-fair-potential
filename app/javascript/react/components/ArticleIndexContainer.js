import React, {useState, useEffect} from 'react'
import IndexArticleTile from './IndexArticleTile'

const ArticleIndexContainer = (props) => {
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/v1/articles')

      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error (errorMessage)
        throw(error)
      } else {
        const parsedArticles = await response.json()
        setArticles(articles.concat(parsedArticles.data))
      }
    } catch(err) {
        console.error(`Error in Fetch: ${err.message}`)
      }
    }

    useEffect (() => {
      fetchArticles()
    }, [])

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
    <div><h1>List of articles</h1>
    <div>
      {IndexArticleTiles}
    </div>
    </div>
  )
}
export default ArticleIndexContainer
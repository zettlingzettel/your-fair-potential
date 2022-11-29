import React from 'react'
import { Link } from "react-router-dom"

const ArticleIndexTile = (props) => {
  return(
      <div className="small-6 medium-6 large-6 callout index-container">

      <Link to={`/articles/${props.doi}`} className="custom-link-mini">
        {props.title}
      </Link>
      <p>Genre: {props.genre}</p>
      <p>Year: {props.year}</p>
      <p>Doi: {props.doi}</p>
      </div>
      // </div>
  )
}

export default ArticleIndexTile
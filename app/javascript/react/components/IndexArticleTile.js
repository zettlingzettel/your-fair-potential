import React from 'react'
import { Link } from "react-router-dom"

const IndexArticleTile = (props) => {
  return(
    <div>
      <Link to={`/articles/${props.doi}`}>
        {props.title}
      </Link>
      <br/>
      Genre: {props.genre}
      <br/>
      Year: {props.year}
      <br/>
      Doi: {props.doi}
    </div>
  )
}

export default IndexArticleTile
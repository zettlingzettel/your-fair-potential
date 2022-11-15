import React, {useState, useEffect} from 'react'

const IndexArticleTile = (props) => {
  return(
    <div>
      Genre: {props.genre}
      <br/>
      Title: {props.title}
      <br/>
      Year: {props.year}
      <br/>
      Doi: {props.doi}
    </div>
  )
}

export default IndexArticleTile
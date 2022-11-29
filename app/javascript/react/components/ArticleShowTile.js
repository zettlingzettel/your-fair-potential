import React from 'react'

const ArticleShowTile = props => {

  let i = 0
  const authorsData = props.authors.map ((author) => {
    i++
    return (
        <li key={i}>{author.family}, {author.given} </li>
      )
  }) 

  return (
    <div className="grid-x grid-margin-x div-landing-padding margin-top-05 ">
    <div className="small-6 medium-6 large-6 callout">
      <p>Title: {props.title}</p>
      <p>Genre: {props.genre}</p>
      <p>Year: {props.year}</p>
      <p>Doi: {props.doi}</p>
      <p>Journal Name: {props.journal_name}</p>
      </div>
      <div className="small-6 medium-6 large-6 callout"> 
        <p>Authors: {authorsData}</p>
      <p className="word-warp-break">URL For Landing Page: <a href={props.url_for_landing_page} className="custom-link-mini">{props.url_for_landing_page}</a></p>
      <p className="word-warp-break">URL for pdf: <a href={props.url_for_pdf} className="custom-link-mini">{props.url_for_pdf}</a></p>
      </div>
    </div>
  )
}

export default ArticleShowTile
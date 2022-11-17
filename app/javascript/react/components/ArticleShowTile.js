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
    <div>
      <p>Title: {props.title}</p>
      <p>Genre: {props.genre}</p>
      <p>Year: {props.year}</p>
      <p>Doi: {props.doi}</p>
      <p>Journal Name: {props.journal_name}</p>
      <p>Authors: {authorsData}</p>
      <p>URL For Landing Page: <a href={props.url_for_landing_page}>{props.url_for_landing_page}</a></p>
      <p>URL for pdf: <a href={props.url_for_pdf}>{props.url_for_pdf}</a></p>
    </div>
  )
}

export default ArticleShowTile
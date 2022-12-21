import React from 'react'

const ArticleReviewTile = props => {
  return (
    <div>{props.article_review.body}</div>
  )
}

export default ArticleReviewTile

// const SummaryShowTile = props => {
//   return (
//     <div>
//       <p>Title: {props.summary.title}</p>
//       <p>Body: {props.summary.body}</p>
//     </div>
//   )
// }
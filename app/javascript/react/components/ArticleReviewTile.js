import React from 'react'

const ArticleReviewTile = props => {
  return (
    <div className="custom-text callout small-10 medium-10 large-10 word-warp-break">{props.article_review.body}</div>
  )
}
export default ArticleReviewTile
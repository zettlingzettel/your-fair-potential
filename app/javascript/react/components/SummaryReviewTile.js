import React, { useState } from 'react'

const SummaryReviewTile = (props) => {
  return (
    <div  className="custom-text callout small-10 medium-10 large-10 word-warp-break">
      {props.summary.body} 
    </div>
  )
}

export default SummaryReviewTile
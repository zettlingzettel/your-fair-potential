import React, { useState } from 'react'
import { Link } from "react-router-dom"

const IndexRecentSummary = (props) => {
  return(
    <div className="callout small-6 medium-6 large-6 word-warp-break">
      <Link to={`/articles/${props.summary.api_doi}`} className="custom-link-mini">
      {props.summary.title}
    </Link>
    </div>
  )
}

export default IndexRecentSummary
import React from 'react'

const SummaryShowTile = props => {
  // debugger
  return (
    <div>
      <h1>Summary</h1>
      <p>Title: {props.summary.title}</p>
      <p>Body: {props.summary.body}</p>
    </div>
  )
}

export default SummaryShowTile
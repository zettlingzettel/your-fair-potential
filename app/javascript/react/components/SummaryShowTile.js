import React from 'react'

const SummaryShowTile = props => {
  return (
    <div>
      <p>Title: {props.summary.title}</p>
      <p>Body: {props.summary.body}</p>
    </div>
  )
}

export default SummaryShowTile
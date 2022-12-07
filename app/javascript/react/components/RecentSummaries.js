
import React, { useEffect, useState } from 'react'
import IndexRecentSummary from './IndexRecentSummary'

const RecentSummaries = (props) => {

  const [summariesArr, setSummariesArr] = useState([])


  const fetchSummary = async () => {
    try {
      const response = await fetch(`/api/v1/summaries/index`)
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error (errorMessage)
        throw(error)
      } else {
        const parsedSummaries = await response.json()
          setSummariesArr([...parsedSummaries.summaries])
        }
      } catch (err) {
        console.error(`Error in Fetch: ${err.message}`)
      }
    }

  useEffect (() => {
    fetchSummary()
  }, [])

  const IndexSummaryTiles = summariesArr.map((summary) => {
    return (
      <div key={summary.id} className="margin-top-05 margin-left-05 margin-right-05">
        <IndexRecentSummary
        summary = {summary} />
      </div>
    )
  })
  


  return(
    <div>
      {IndexSummaryTiles}
      </div>
  )
}
export default RecentSummaries
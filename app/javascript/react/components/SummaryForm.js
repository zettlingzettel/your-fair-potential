import React, { useState, useEffect } from 'react'

const SummaryForm = (props) => {
  const clearState = {
    title: "",
    body: "",
    api_doi: ""
  }

  const [errors, setErrors] = useState({})
  const [user, setUser] = useState("")
  const [summary, setSummary] = useState({})

  const [summaryRecord, setSummaryRecord] = useState(clearState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // if (validForSubmission()) {
      addSummary(summaryRecord)
    // }
  }


  const handleInputChange = event => {
    setSummaryRecord ({
      ...summaryRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const addSummary = async (summaryRecord) =>{
    let formData = {
      title: summaryRecord.title,
      body: summaryRecord.body,
      api_doi: summaryRecord.api_doi
    }
    try {
      const response = await fetch(`/api/v1/summaries/add_summary`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()

      if (!responseBody.errors) {
        setSummaryRecord(clearState)
        setSummary(responseBody)
      } else if (
        responseBody.errors.includes("User must exist")) {
        setUser("none")
      }
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }


  useEffect(() => {
    addSummary(summaryRecord)
  }, [])

  // add error display under the form
  return(
    <div className="div-landing-padding custom-text">
      <form onSubmit={handleSubmit} className="callout cell grid-x grid-padding-x div-landing-padding">
        <legend className="cell small-12 medium-12 large-12 to-align-center">Add summary:</legend>
        <label htmlFor="title"
        className="cell small-12 medium-12 large-12 custom-display"
        >Title:
          <input  
            className="custom-display cell small-12 medium-12 large-12 custom-display"
            id="title" 
            name="title" 
            onChange={handleInputChange} 
            value={summaryRecord.title}
            /> 
        </label>

        <label htmlFor="body" className="cell small-12 medium-12 large-12 custom-display" >Body:
          <textarea
            className="custom-display cell small-12 medium-12 large-12 custom-display"
            id="body" 
            name="body" 
            onChange={handleInputChange} 
            value={summaryRecord.body}
            /> 
        </label>

        <label htmlFor="api_doi"
        className="cell small-12 medium-12 large-12 custom-display"
        >API:
          <input 
          className="custom-display cell small-12 medium-12 large-12 custom-display"
            id="api_doi" 
            name="api_doi" 
            onChange={handleInputChange} 
            value={summaryRecord.api_doi}
            /> 
        </label>
        <input className="custom-button to-align-center cell small-12 medium-12 large-12" type="submit" value="Add your summary" />
      </form>
      </div>
  )
}

export default SummaryForm
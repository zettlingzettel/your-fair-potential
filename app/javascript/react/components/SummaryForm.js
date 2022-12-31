import React, { useState } from "react"

const SummaryForm = (props) => {
  const clearState = {
    title: "",
    body: "",
    api_doi: ""
  }

  const [errors, setErrors] = useState({})
  const [user, setUser] = useState("")

  const [summaryRecord, setSummaryRecord] = useState(clearState)


  return(
    <div>
      <form onSubmit={handleSubmit}>
        // errors
        <legend>Add summary:</legend>
        <label htmlFor="title">
          <input
            id="title" 
            name="title" 
            onChange={handleInputChange} 
            value={summaryRecord.title}
            /> 
        </label>

        <label htmlFor="body">
          <textarea
            id="body" 
            name="body" 
            onChange={handleInputChange} 
            value={summaryRecord.body}
            /> 
        </label>

        <label htmlFor="api_doi">
          <input
            id="api_doi" 
            name="api_doi" 
            onChange={handleInputChange} 
            value={summaryRecord.api_doi}
            /> 
        </label>
        <input type="submit" value="Add your summary"/>
      </form>
      </div>
  )
}

export default SummaryForm
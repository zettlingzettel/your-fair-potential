// import React, { useState, useState, useEffect, useReducer } from 'react'
import React, { useState, useEffect } from 'react'
import ErrorList from './ErrorList.js'

const SummaryReviewForm = (props) => {
  const clearState = {
    body: ""
  }

  const [errors, setErrors] = useState({})
  const [user, setUser] = useState("")

  // const [summaryReviewRecord, setSummaryReviewRecord] = useState({})
  const [summaryReviewRecord, setSummaryReviewRecord] = useState(clearState)

  const handleInputChange = event => {
    setSummaryReviewRecord ({
      ...summaryReviewRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["body"]
    requiredFields.forEach(field => {
      if (summaryReviewRecord[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    
    
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }
  useEffect(() => {
    addSummaryReview(summaryReviewRecord)
  }, [])
  
  const addSummaryReview = async (summaryReviewRecord) =>{
    let formData = {
      body: summaryReviewRecord.body
    }
    try {
      const response = await fetch(`/api/v1/articles/${props.match_pt1}/${props.match_pt2}/summary_reviews`, {
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
        setSummaryReviewRecord(clearState)
        props.setArticle({
          ...props.article,
          summary_reviews: [...props.article.summary_reviews, responseBody]
        })
      } else if (
        responseBody.errors.includes("User must exist")) {
        setUser("none")
      }
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      addSummaryReview(summaryReviewRecord)
    }
  }

  if (user === "none") {
    return (
      <div>
        <h2>
          You must be signed in to post a review. Press the button below to sign in.
        </h2>
        <a href="/users/sign_in">
          <input className="button cell" type="submit" value="Sign in"/>
        </a>
      </div>
  )} else { 
    return (
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />

        <legend>Summary form:</legend>
        <label htmlFor="body">
          <textarea
            id="body" 
            name="body" 
            onChange={handleInputChange} 
            value={summaryReviewRecord.body}/> 
        </label>
        <input type="submit" value="Add your summary review!"/>
      </form>)
  }
}

export default SummaryReviewForm
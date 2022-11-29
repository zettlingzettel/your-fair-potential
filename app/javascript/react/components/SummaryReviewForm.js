import React, { useState, useEffect } from 'react'
import ErrorList from './ErrorList.js'

const SummaryReviewForm = (props) => {
  const clearState = {
    body: ""
  }

  const [errors, setErrors] = useState({})
  const [user, setUser] = useState("")

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
      <div className="callout cell grid-x grid-padding-x div-landing-padding">
        <h2 className="cell text-center">
          You must be signed in to post a review. Press the button below to sign in.
        </h2>
        <a href="/users/sign_in" className=" to-align-center cell small-12 medium-12 large-12">
          <input className="custom-button cell small-10 medium-10 large-10" type="submit" value="Sign in"/>
        </a>
      </div>
  )} else if (props.article.summary===undefined) {
    return (<div className="div-landing-padding">No summary. Add summary first.</div>)
  } else { 
    return (
      <div className="div-landing-padding">
      <form onSubmit={handleSubmit} className="callout grid-x grid-padding-x">
        <ErrorList errors={errors} />

        <legend className="cell small-12 medium-12 large-12 to-align-center">Add summary review:</legend>
        <label htmlFor="body">
          <textarea className="cell small-12 medium-12 large-12" 
            id="body" 
            name="body" 
            onChange={handleInputChange} 
            value={summaryReviewRecord.body}
            rows="6" cols="80"
            /> 
        </label>
        <input className="custom-button to-align-center cell small-12 medium-12 large-12 " type="submit" value="Add your summary review!"/>
      </form>
      </div>
      )
  }
}

export default SummaryReviewForm
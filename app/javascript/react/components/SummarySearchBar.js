import React, { useState } from "react"

const SummarySearchBar = (props) => {
  const [search, setSearch] = useState({
    search: ""})

    const handleInputChange = event => {
      setSearch({
        ...search,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }

    const addNewSearchQuery = async(data) => {
      try {
        const response = await fetch(`api/v1/summaries/find_summaries?search=${data.query}`)
        if (!response.ok) {
          const newError = new Error(`${response.status} (${response.statusText})`)
          throw(newError)
        }
        const responseBody = await response.json()
        debugger
        // props.setSummaries([...responseBody.data])
      } catch (err) {
        console.log(`Error in fetch: ${err.message}`)
      }
    }
    

    const handleFormSubmit = (event) => {
      event.preventDefault()
      addNewSearchQuery(search)
    }


  return (
    <form onSubmit = {handleFormSubmit}>
    <label><h1>Search Query:</h1>
      <input type="text" name="query" id="query" onChange={handleInputChange} value={addNewSearchQuery.query} />
    </label>
    <input className="custom-button" type="submit" value="Search" />
  </form>
  )
}

export default SummarySearchBar
import React, { useState, useEffect } from "react"
import ArticleShowTile from "./ArticleShowTile"
// import ArticleShowContainer from "./components/ArticleShowContainer"

const SearchBar = (props) => {
  const [search, setSearch] = useState({
    search: ""})

  const handleInputChange = event => {
    setSearch({
      ...search,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const addNewSearchQuery = async(data) => {
    // debugger
    try {
      const response = await fetch(`api/v1/articles/find_articles?search=${data.query}`)
      // debugger
      // , {
        // method: "POST",
        // headers: { 
        //   'content-type': "application/json",
        //   Accept: "application/json"
        // },
        // body: JSON.stringify(Data)
      // })
      if (!response.ok) {
        const newError = new Error(`${response.status} (${response.statusText})`)
        throw(newError)
      }
      const responseBody = await response.json()
      debugger
      props.setArticles([...props.articles, responseBody.data])

      // debugger
        // ([
          //   ...search,
          //   responseBody
          // ])
        } catch (err) {
          console.log(`Error in fetch: ${err.message}`)
        }
      }
      const handleFormSubmit = (event) => {
    event.preventDefault()
    
    addNewSearchQuery(search)
    // addNewSearchQuery()

    // addNewSearch(search)
  }

  //   const addNewArticle = async(Data) => {
  //   // debugger
  //   try {
  //     const response = await fetch("api/v1/articles/find_articles")
  //     debugger
  //     if (!response.ok) {
  //       const newError = new Error(`${response.status} (${response.statusText})`)
  //       throw(newError)
  //     }
  //     const responseBody = await response.json()
  //       // props.setArticle(responseBody)
  //   } catch (err) {
  //     console.log(`Error in fetch: ${err.message}`)
  //   }
  // }
  // const handleFormSubmit = (event) => {
  //   event.preventDefault()
  //   addNewSearchQuery(search)
  // }

  // const fetchArticles = async () => {

  //   try {
  //     const response = await fetch('/api/v1/articles/find_articles')
  //     debugger

  //     if(!response.ok) {
  //       const errorMessage = `${response.status} (${response.statusText})`
  //       const error = new Error (errorMessage)
  //       throw(error)
  //     } else {
  //       const parsedArticles = await response.json()
  //       setArticles(articles.concat(parsedArticles.data))
  //     }
  //   } catch(err) {
  //       console.error(`Error in Fetch: ${err.message}`)
  //     }
  //   }

    // useEffect (() => {
    //   addNewSearchQuery()
    // }, [])

  return (
    // <form onSubmit = {handleFormSubmit}>
    <form onSubmit = {handleFormSubmit}>
      <label>Search Query:
        <input type="text" name="query" id="query" onChange={handleInputChange} value={addNewSearchQuery.query} />
      </label>
      <input className="button" type="submit" value="Search" />
    </form>
  )
}

export default SearchBar

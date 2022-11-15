import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ArticleIndexContainer from "./ArticleIndexContainer"
import LandingPage from './LandingPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/articles' component={ArticleIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

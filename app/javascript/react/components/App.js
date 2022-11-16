import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import ArticleIndexContainer from "./ArticleIndexContainer"
import ArticleShowContainer from '../ArticleShowContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/articles' component={ArticleIndexContainer}/>
        <Route exact path='/articles/:doi_pt1/:doi_pt2' component={ArticleShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

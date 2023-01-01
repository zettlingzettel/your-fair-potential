import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ArticleIndexContainer from "./ArticleIndexContainer"
import LandingPage from './LandingPage'
import ArticleShowContainer from './ArticlesShowContainer'
import RecentSummaries from './RecentSummaries'
import SummaryForm from './SummaryForm'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/articles' component={ArticleIndexContainer}/>
        <Route exact path='/articles/:doi_pt1/:doi_pt2' component={ArticleShowContainer} />
        <Route exact path='/summaries' component={RecentSummaries} />
        <Route exact path='/summaries/new'component={SummaryForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
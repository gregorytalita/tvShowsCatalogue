import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { TemplateRoute } from '../../components'
import * as routes from '../../core/constants/routes'

import { searchShows } from '../../core/api/search'

import Dashboard from '../Dashboard'
import SearchResult from '../SearchResult'

const App = ({ history }) => {

  const onClickSearch = search => {
    searchShows(search)
      .then(searchResult => {

        history.push({
          pathname: routes.NOT_PRIVATE.SEARCH,
          state: {
            search,
            shows: searchResult
          }
        })

      })
  }

  return (

    <Switch>
      <TemplateRoute
        path={routes.NOT_PRIVATE.DASHBOARD}
        component={Dashboard}
        onClickSearch={onClickSearch}
      />
      <TemplateRoute
        path={routes.NOT_PRIVATE.SEARCH}
        component={SearchResult}
        onClickSearch={onClickSearch}
      />
      <Redirect from='*' to={routes.NOT_PRIVATE.DASHBOARD} />
    </Switch>

  )
}

export default App

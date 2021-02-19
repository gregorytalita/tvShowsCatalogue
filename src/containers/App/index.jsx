import React, { useEffect, useState } from 'react'
import { Switch, Redirect } from 'react-router-dom'

import TVShowsContext from '../../contexts/TVShowsContext'
import { TemplateRoute } from '../../components'
import * as routes from '../../core/constants/routes'

import { searchShows } from '../../core/api/search'
import { getShows } from '../../core/api/shows'
import { formatIntoGenres } from '../../core/functions'

import Dashboard from '../Dashboard'
import SearchResult from '../SearchResult'

const App = ({ history }) => {
  const [tvShows, handleTVShows] = useState({})

  useEffect(() => {
    getShows()
      .then(formatIntoGenres)
      .then(handleTVShows)
  }, [])

  const onKeyUpSearch = search => {

    searchShows(search)
      .then(searchResult => {

        history.push({
          pathname: routes.NOT_PRIVATE.SEARCH,
          state: { search, shows: searchResult }
        })

      })
  }

  return (
    <TVShowsContext.Provider value={{ showsByGenre: tvShows }}>
      <Switch>
        <TemplateRoute
          path={routes.NOT_PRIVATE.DASHBOARD}
          component={Dashboard}
          onKeyUpSearch={onKeyUpSearch}
          redirectRoute={routes.NOT_PRIVATE.DASHBOARD}
        />
        <TemplateRoute
          path={routes.NOT_PRIVATE.SEARCH}
          component={SearchResult}
          onKeyUpSearch={onKeyUpSearch}
          redirectRoute={routes.NOT_PRIVATE.DASHBOARD}
        />
        <Redirect from='*' to={routes.NOT_PRIVATE.DASHBOARD} />
      </Switch>
    </TVShowsContext.Provider>
  )
}

export default App

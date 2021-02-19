import React, { useEffect, useState } from 'react'
import { Switch, Redirect } from 'react-router-dom'

import TVShowsContext from '../../contexts/TVShowsContext'
import { TemplateRoute, LoaderOverlay } from '../../components'
import * as routes from '../../core/constants/routes'

import { searchShows } from '../../core/api/search'
import { getShows } from '../../core/api/shows'
import { formatIntoGenres } from '../../core/functions'

import Dashboard from '../Dashboard'
import SearchResult from '../SearchResult'

const App = ({ history }) => {
  const [tvShows, handleTVShows] = useState({})
  const [loading, handleLoading] = useState(true)

  useEffect(() => {
    getShows()
      .then(formatIntoGenres)
      .then(handleTVShows)
      .then(() => handleLoading(false))
  }, [])

  const onClickSearch = search => {
    handleLoading(true)

    searchShows(search)
      .then(searchResult => {
        history.push({
          pathname: routes.NOT_PRIVATE.SEARCH,
          state: {
            search,
            shows: searchResult
          }
        })

        handleLoading(false)
      })
  }

  return (
    <>
      {/* <LoaderOverlay enabled={loading}/> */}
      <TVShowsContext.Provider value={{ showsByGenre: tvShows }}>
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
      </TVShowsContext.Provider>
    </>
  )
}

export default App

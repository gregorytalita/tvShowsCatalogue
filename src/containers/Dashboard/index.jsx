import React, { useState } from 'react'

import { MovieRow, DetailsDrawer, DetailsTemplate } from '../../components'
import { useTVShowsContext } from '../../contexts/TVShowsContext'

const Dashboard = () => {
  const { showsByGenre } = useTVShowsContext()
  const [movieDetail, handleMovieDetails] = useState()

  const handleMovieClick = movieProperties => handleMovieDetails(movieProperties)

  const handleDetailsDrawerClose = () => handleMovieDetails()

  return (

    <>
      {
        Object.keys(showsByGenre).sort().map(genres => (
          <MovieRow
            key={genres}
            label={genres}
            movies={showsByGenre[genres].sort((a, b) => b.rating.average - a.rating.average)}
            onClickShowCard={handleMovieClick}
          />
        ))
      }
      <DetailsDrawer open={!!movieDetail} onClose={handleDetailsDrawerClose}>
        {
          movieDetail && <DetailsTemplate {...movieDetail} />
        }
      </DetailsDrawer>
    </>

  )
}

export default Dashboard

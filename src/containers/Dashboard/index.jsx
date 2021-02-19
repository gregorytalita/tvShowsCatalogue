import React, { useEffect, useState }  from 'react'

import { MovieRow, DetailsDrawer, DetailsTemplate } from '../../components'
import { getShows } from '../../core/api/shows'
import { formatMoviesIntoGenres } from '../../core/functions'

const Dashboard = () => {

  const [ movies, handleMovies ] = useState({})
  const [ movieDetail, handleMovieDetails] = useState()

  useEffect(() => {
    getShows()
      .then(formatMoviesIntoGenres)
      .then(handleMovies)
  }, [])

  const handleMovieClick = movieProperties => handleMovieDetails(movieProperties)

  const handleDetailsDrawerClose = () => handleMovieDetails()

  return (

    <>
      {
        Object.keys(movies).sort().map(genres => (
          <MovieRow
            key={genres}
            label={genres}
            movies={movies[genres].sort((a, b) => b.rating.average - a.rating.average)}
            onClickMovieCard={handleMovieClick}
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

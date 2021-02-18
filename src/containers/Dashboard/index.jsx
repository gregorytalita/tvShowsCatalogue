import React, { useEffect, useState }  from 'react'
import { Box, Typography, Chip } from '@material-ui/core'

import { MovieRow, DetailsDrawer } from '../../components'
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
        Object.keys(movies).map(genres => (
          <MovieRow
            key={genres}
            label={genres}
            movies={movies[genres]}
            onClickMovieCard={handleMovieClick}
          />
        ))
      }
      <DetailsDrawer open={!!movieDetail} onClose={handleDetailsDrawerClose}>
        {

          movieDetail && (
            <Box height='50vh' paddingX={6} paddingY={8}>

              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                mb={4}
                flexWrap='wrap'
              >

                <Typography variant='h4'>
                  {movieDetail.name}
                </Typography>

                <Box maxWidth='25%' display='flex' justifyContent='space-between' m={2} flexWrap='wrap'>
                  {
                    movieDetail.genres?.length && movieDetail.genres.map(genre => (
                      <Chip variant="outlined" color="secondary" label={genre} />
                    ))
                  }
                </Box>

              </Box>

              <Typography paragraph>
                {movieDetail.summary}
              </Typography>

            </Box>
          )
        }
      </DetailsDrawer>
    </>

  )
}

export default Dashboard

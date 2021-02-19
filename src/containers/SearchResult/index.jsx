import React, { useState }  from 'react'

import { MovieCard, DetailsDrawer, DetailsTemplate } from '../../components'
import { Box, Typography } from '@material-ui/core'

const SearchResult = ({ location }) => {

  const [ movieDetail, handleMovieDetails] = useState()

  const handleMovieClick = movieProperties => handleMovieDetails(movieProperties)

  const handleDetailsDrawerClose = () => handleMovieDetails()

  const { shows = [], search } = location.state

  return (

    <>
      <Box borderBottom={1} paddingY={2} borderColor="primary.main">
        <Typography variant='h4'>
          Result for "<Typography variant='h4' component='span' color='primary'>{search}</Typography>"
        </Typography>
      </Box>
      <Box display='flex' flexWrap='wrap' marginY={2}>
        {
          shows.length && shows.map(({ show }) => (
            <Box marginRight='8px' marginBottom={2}>
              <MovieCard
                key={show.id}
                onClick={() => handleMovieClick(show)}
                {...show}
              />
            </Box>
          ))
        }
      </Box>

      <DetailsDrawer open={!!movieDetail} onClose={handleDetailsDrawerClose}>
        {
          movieDetail && <DetailsTemplate {...movieDetail} />
        }
      </DetailsDrawer>
    </>

  )
}

export default SearchResult

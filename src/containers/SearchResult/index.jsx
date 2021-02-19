import React, { useState } from 'react'

import { ShowCard, DetailsDrawer, DetailsTemplate } from '../../components'
import { Box, Typography, Grow } from '@material-ui/core'
import { calculateGrowTimeout } from '../../core/functions'

const SearchResult = ({ location }) => {

  const [movieDetail, handleMovieDetails] = useState()

  const handleMovieClick = movieProperties => handleMovieDetails(movieProperties)
  const handleDetailsDrawerClose = () => handleMovieDetails()

  const { shows = [], search } = location.state

  return (

    <>
      <Box borderBottom={1} paddingY={2} borderColor='primary.main'>
        <Typography variant='h4'>
          <b>Result for</b> "{search}"
        </Typography>
      </Box>
      <Box display='flex' flexWrap='wrap' justifyContent='space-around' marginY={2}>
        {
          shows.length && shows.map(({ show }, index) => (
            <Grow in={true} timeout={calculateGrowTimeout(index)} key={show.id}>
              <Box marginRight='8px' marginBottom={2}>
                <ShowCard
                  onClick={() => handleMovieClick(show)}
                  {...show}
                />
              </Box>
            </Grow>
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

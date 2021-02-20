import React, { useState } from 'react'

import { ShowCard, DetailsDrawer, DetailsTemplate } from '../../components'
import { Box, Typography, Grow } from '@material-ui/core'
import { transformSecondsToMilliseconds } from '../../core/functions'

const SearchResult = ({ location }) => {
  const [showDetail, handleShowDetails] = useState()

  const handleShowClick = showProperties => handleShowDetails(showProperties)
  const handleDetailsDrawerClose = () => handleShowDetails()

  const { shows = [], search } = location.state

  return (

    <>
      <Box borderBottom={1} paddingY={2} borderColor='primary.main'>
        <Typography variant='h2'>
          Result for"<b>{search}</b>"
        </Typography>
      </Box>
      <Box display='flex' flexWrap='wrap' justifyContent='space-around' marginY={2}>
        {
          shows.length && shows.map(({ show }, index) => (
            <Grow in timeout={transformSecondsToMilliseconds(index)} key={show.id}>
              <Box marginRight='8px' marginBottom={2}>
                <ShowCard
                  {...show}
                  onClick={() => handleShowClick(show)}
                  image={show.image?.medium}
                />
              </Box>
            </Grow>
          ))
        }
      </Box>

      <DetailsDrawer open={!!showDetail} onClose={handleDetailsDrawerClose}>
        {
          showDetail &&
            <DetailsTemplate {...showDetail} image={showDetail.image?.original} />
        }
      </DetailsDrawer>
    </>

  )
}

export default SearchResult

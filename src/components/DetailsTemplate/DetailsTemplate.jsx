import React from 'react'
import { Box, Typography, Chip } from '@material-ui/core'
import { Banner } from '../'
import { removeHTML } from '../../core/functions'
import { ContentWrapper } from './styles'

const DetailsTemplate = ({ image, name, genres = [], summary }) => {

  return (
    <ContentWrapper width='50vw' height='100%' paddingX={6} paddingY={8} position='relative'>

      <Banner url={image.original} />

      <Box my={2}>

        <Typography variant='h4'>
          {name}
        </Typography>

        <Box maxWidth='75%' display='flex' justifyContent='space-between' my={2} flexWrap='wrap'>
          {
            genres.length && genres.map(genre => (
              <Chip variant="outlined" color="secondary" label={genre} key={genre} />
            ))
          }
        </Box>

        <Box paddingY={2}>
          <Typography paragraph>
            {removeHTML(summary)}
          </Typography>
        </Box>

      </Box>

    </ContentWrapper>
  )
}

export default DetailsTemplate
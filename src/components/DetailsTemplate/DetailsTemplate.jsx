import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { Banner, GenreChips } from '../'
import { removeHTML } from '../../core/functions'
import { ContentWrapper } from './styles'

const DetailsTemplate = ({ image, name, genres = [], summary }) => {
  return (
    <ContentWrapper width='50vw' height='100%' paddingX={6} paddingY={8} position='relative'>

      { image && <Banner url={image.original} /> }

      <Box my={2}>

        <Typography variant='h4'>
          {name}
        </Typography>

        <GenreChips genres={genres} />

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

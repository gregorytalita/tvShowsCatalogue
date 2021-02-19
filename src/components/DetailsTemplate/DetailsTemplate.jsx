import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { GenreChips } from '../'
import { removeHTML } from '../../core/functions'
import { ContentWrapper } from './styles'

const DetailsTemplate = ({ image, name, genres = [], summary }) => {
  return (
    <ContentWrapper
      width='50vw'
      height='100%'
      paddingX={6}
      paddingBottom={3}
      position='relative'
      backgroundImage={image?.original}
    >

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

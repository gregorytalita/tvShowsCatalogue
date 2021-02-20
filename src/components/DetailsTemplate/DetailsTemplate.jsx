import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography } from '@material-ui/core'
import { GenreChips } from '../'
import { removeHTML } from '../../core/functions'
import { ContentWrapper } from './styles'
import ShowCardPlaceholder from './showCardPlaceholder.png'
const DetailsTemplate = ({ image, name, genres, summary }) => {
  return (
    <ContentWrapper
      width='50vw'
      height='100%'
      paddingX={6}
      paddingBottom={3}
      position='relative'
      image={image || ShowCardPlaceholder}
    >

      <Box my={2}>

        <Typography variant='h4'>
          {name}
        </Typography>

        {
          genres.length && <GenreChips genres={genres} />
        }

        <Box paddingY={2}>
          <Typography paragraph variant='body1'>
            {removeHTML(summary)}
          </Typography>
        </Box>

      </Box>

    </ContentWrapper>
  )
}

DetailsTemplate.prototype = {
  image: PropTypes.string,
  name: PropTypes.string,
  genres: PropTypes.array,
  summary: PropTypes.string
}

DetailsTemplate.defaultProps = {
  name: 'Not informed',
  genres: [],
  summary: 'Not informed'
}

export default DetailsTemplate

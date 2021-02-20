import React from 'react'
import PropTypes from 'prop-types'

import { Chip } from '@material-ui/core'
import { ContentWrapper } from './styles'

const GenreChips = ({ genres }) => {
  return (
    <ContentWrapper marginY={2}>
      {
        genres.map(genre => (
          <Chip
            variant='outlined'
            color='secondary'
            label={genre}
            key={genre}
          />
        ))
      }
    </ContentWrapper>
  )
}

GenreChips.prototype = {
  genres: PropTypes.array.isRequired
}

export default GenreChips

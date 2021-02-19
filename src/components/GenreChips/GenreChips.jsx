import React from 'react'
import { Chip } from '@material-ui/core'
import { ContentWrapper } from './styles'

const GenreChips = ({ genres }) => {
  return (
    <ContentWrapper marginY={2}>
      {
        genres.length && genres.map(genre => (
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

export default GenreChips

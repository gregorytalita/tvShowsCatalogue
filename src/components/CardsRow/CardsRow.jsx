import React from 'react'
import PropTypes from 'prop-types'
import { useSpring } from 'react-spring'
import { useScroll } from 'react-use-gesture'

import { Typography, Box } from '@material-ui/core'
import { ShowCard } from '../'
import { MoviesContainer } from './styles'

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value
  } else {
    return value < -clampAt ? -clampAt : value
  }
}

const CardsRow = ({ shows, label, onClickShowCard }) => {
  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)'
  }))

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    })
  })

  return (

    <>
      <Box marginTop={2} borderColor='primary.main'>
        <Typography variant='h2'>
          {label}
        </Typography>
      </Box>
      <MoviesContainer {...bind()}>
        {
          shows.length && shows.map((show, i) => (
            <ShowCard
              {...show}
              image={show.image?.medium}
              rating={show.rating?.average}
              key={`${show.id}-${i}`}
              style={style}
              onClick={() => onClickShowCard(show)}
            />
          ))
        }
      </MoviesContainer>
    </>

  )
}

CardsRow.prototype = {
  shows: PropTypes.array.isRequired,
  label: PropTypes.string,
  onClickShowCard: PropTypes.func.isRequired
}

CardsRow.defaultProps = {
  label: 'Not Informed'
}

export default CardsRow

import React from 'react'
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

const MovieRow = ({ movies, label, onClickShowCard }) => {
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
        <Typography variant='h4'>
          <b>{label}</b>
        </Typography>
      </Box>
      <MoviesContainer {...bind()}>
        {
          movies.length && movies.map((movie, i) => (
            <ShowCard
              key={`${movie.id}-${i}`}
              style={style}
              onClick={() => onClickShowCard(movie)}
              {...movie}
            />
          ))
        }
      </MoviesContainer>
    </>

  )
}

export default MovieRow

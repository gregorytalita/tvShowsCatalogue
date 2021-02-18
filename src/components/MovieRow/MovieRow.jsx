import React from 'react'
import { useSpring } from "react-spring"
import { useScroll } from "react-use-gesture"

import { Typography } from '@material-ui/core'
import { MovieCard } from '../'
import { MoviesContainer } from './styles'

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const MovieRow = ({ movies, label }) => {

  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });

  return (

    <>
      <Typography variant='h2'>{label}</Typography>
      <MoviesContainer {...bind()}>
        {
          movies.length && movies.map((src, i) => (
            <MovieCard
              key={`${src}-${i}`}
              style={{
                ...style,
                backgroundImage: `url(${src})`
              }}
            />
          ))
        }
      </MoviesContainer>
    </>

  )
}

export default MovieRow

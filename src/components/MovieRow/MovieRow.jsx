import React from 'react'
import { useSpring } from "react-spring"
import { useScroll } from "react-use-gesture"
import { MoviesContainer } from './styles'
import { MovieCard } from '../'

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const MovieRow = ({ movies }) => {

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

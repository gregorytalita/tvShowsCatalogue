import React from 'react'

import { MovieRow } from '../../components'
import Thumbnail from '../../thumbnail.jpg'

const Dashboard = () => {

  const handleMovieClick = () => {
    console.log('hallo')
  }
  const movies = [{ src: Thumbnail, onClick: handleMovieClick },{ src: Thumbnail, onClick: handleMovieClick },{ src: Thumbnail, onClick: handleMovieClick },{ src: Thumbnail, onClick: handleMovieClick },{ src: Thumbnail, onClick: handleMovieClick },{ src: Thumbnail, onClick: handleMovieClick }]

  return (

    <>
      <MovieRow label='Action' movies={movies} />
    </>

  )
}

export default Dashboard

import React from 'react'

import { MovieRow } from '../../components'
import Thumbnail from '../../thumbnail.jpg'

const Dashboard = () => {

  return (

    <>
      <MovieRow movies={[Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail]} />
    </>

  )
}

export default Dashboard

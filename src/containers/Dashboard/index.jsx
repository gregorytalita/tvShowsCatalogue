import React from 'react'

import { MovieRow } from '../../components'
import Thumbnail from '../../thumbnail.jpg'

const Dashboard = () => {

  return (

    <>
      <MovieRow label='Action' movies={[Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail,Thumbnail]} />
    </>

  )
}

export default Dashboard

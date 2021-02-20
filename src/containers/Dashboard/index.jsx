import React, { useState } from 'react'

import { CardsRow, DetailsDrawer, DetailsTemplate } from '../../components'
import { useTVShowsContext } from '../../contexts/TVShowsContext'

const Dashboard = () => {
  const { showsByGenre } = useTVShowsContext()
  const [showDetail, handleShowDetails] = useState()

  const handleMovieClick = showProperties => handleShowDetails(showProperties)

  const handleDetailsDrawerClose = () => handleShowDetails()

  return (

    <>
      {
        Object.keys(showsByGenre).sort().map(genres => (
          <CardsRow
            key={genres}
            label={genres}
            shows={showsByGenre[genres].sort((a, b) => b.rating.average - a.rating.average)}
            onClickCard={handleMovieClick}
          />
        ))
      }
      <DetailsDrawer open={!!showDetail} onClose={handleDetailsDrawerClose}>
        {
          showDetail &&
            <DetailsTemplate {...showDetail} image={showDetail.image?.original} />
        }
      </DetailsDrawer>
    </>

  )
}

export default Dashboard

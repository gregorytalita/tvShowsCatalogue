import React from 'react'
import { CircularProgress } from '@material-ui/core';
import { LoaderOverlayWrapper } from './styles'

const LoaderOverlay = ({ isLoading }) => {

  return (
    <LoaderOverlayWrapper isLoading={isLoading} >
      <CircularProgress />
    </LoaderOverlayWrapper>
  )
}

export default LoaderOverlay
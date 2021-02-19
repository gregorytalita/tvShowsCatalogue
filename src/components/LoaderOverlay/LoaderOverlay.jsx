import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoaderOverlayWrapper } from './styles'

const LoaderOverlay = ({ enabled }) => {
  return (
    <LoaderOverlayWrapper enabled={enabled}>
      <CircularProgress />
    </LoaderOverlayWrapper>
  )
}

export default LoaderOverlay

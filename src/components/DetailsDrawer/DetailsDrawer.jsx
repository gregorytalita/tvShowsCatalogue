import React from 'react'
import PropTypes from 'prop-types'
import { SwipeableDrawer } from '@material-ui/core'

const DetailsDrawer = ({ open, onClose, onOpen, children }) => {
  return (
    <SwipeableDrawer
      anchor='right'
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    >
      {children}
    </SwipeableDrawer>
  )
}

DetailsDrawer.prototype = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  children: PropTypes.element.isRequired
}

DetailsDrawer.defaultProps = {
  onClose: () => {},
  onOpen: () => {}
}

export default DetailsDrawer

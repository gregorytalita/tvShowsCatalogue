import React from 'react';
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
  );
}

export default DetailsDrawer
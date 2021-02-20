import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'
import StarsIcon from '@material-ui/icons/Stars'
import { RatingWrapper } from './styles'

const Rate = ({ value, ...rest }) => {
  return (
    <RatingWrapper
      {...rest}
      rating={value}
      width='20%'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <StarsIcon />
      <Typography gutterBottom variant='overline'>
        {value}
      </Typography>
    </RatingWrapper>
  )
}

Rate.prototype = {
  value: PropTypes.string
}

Rate.defaultProps = {
  value: '0'
}

export default Rate

import React from 'react'
import { Typography } from '@material-ui/core'
import StarsIcon from '@material-ui/icons/Stars'
import { RatingWrapper } from './styles'

const Rate = ({ value }) => {
  return (
    <RatingWrapper
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

export default Rate

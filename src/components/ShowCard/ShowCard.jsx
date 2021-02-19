import React from 'react'
import { animated } from 'react-spring'
import { Typography, Box, Hidden } from '@material-ui/core'
import { Card, CardContent, CardActionArea } from './styles'
import { Rate } from '../'
import ShowCardPlaceholder from './showCardPlaceholder.png'

const ShowCard = ({ image, style, name, rating, onClick }) => {
  return (
    <animated.div style={{ ...style }}>
      <Card background={image?.medium || ShowCardPlaceholder}>
        <CardActionArea onClick={onClick}>

          <CardContent>
            <Box display='flex' justifyContent='space-between' alignItems='center'>

              <Typography gutterBottom variant='h6' component='h2'>
                <b>{name}</b>
              </Typography>

              <Hidden smDown>
                <Rate value={rating.average} />
              </Hidden>

            </Box>
          </CardContent>

        </CardActionArea>
      </Card>
    </animated.div>
  )
}

export default ShowCard

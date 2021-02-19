import React from 'react'
import { animated } from "react-spring";
import { CardActionArea, Typography, Box, Hidden } from '@material-ui/core';
import StarsIcon from '@material-ui/icons/Stars';
import { Card, CardMedia, CardContent, CardOverlay, RatingWrapper } from './styles'
import MovieCardPlaceholder from './movieCardPlaceholder.png'

const MovieCard = ({ image, style, name, rating, onClick }) => {

  return (
    <animated.div style={{...style}}>
      <Card onClick={onClick}>
        <CardActionArea>
          <CardMedia image={image?.medium || MovieCardPlaceholder} />
          <CardContent>
            <CardOverlay />
            <Box display='flex' justifyContent='space-between' alignItems='center'>

              <Typography gutterBottom variant='h6' component='h2'>
                <b>{name}</b>
              </Typography>

              <Hidden smDown>
                <RatingWrapper
                  rating={rating.average}
                  width='20%'
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <StarsIcon />
                  <Typography gutterBottom variant="body1">
                    {rating.average}
                  </Typography>
                </RatingWrapper>
              </Hidden>

            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </animated.div>
  )
}

export default MovieCard
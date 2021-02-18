import React from 'react'
import { CardActionArea, Typography } from '@material-ui/core';
import { Card, CardMedia, CardContent } from './styles'
import { animated } from "react-spring";

const MovieCard = ({ style, thumbnail, onClick }) => {

  return (
    <animated.div style={{...style}}>
      <Card onClick={onClick}>
        <CardActionArea>
          <CardMedia image={thumbnail} />
          <CardContent>
            <Typography gutterBottom variant="h5" color='textPrimary'>
              Movie Title
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </animated.div>
  )
}

export default MovieCard
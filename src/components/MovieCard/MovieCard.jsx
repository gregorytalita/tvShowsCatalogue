import React from 'react'
import { CardActionArea, Typography } from '@material-ui/core';
import { Card, CardMedia, CardContent } from './styles'
import { animated } from "react-spring";

const MovieCard = ({ image, style, name, onClick }) => {

  return (
    <animated.div style={{...style}}>
      <Card onClick={onClick}>
        <CardActionArea>
          <CardMedia image={image.medium} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </animated.div>
  )
}

export default MovieCard
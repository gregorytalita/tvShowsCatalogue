import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import { Typography, Box, Hidden } from '@material-ui/core'
import { Card, CardContent, CardActionArea } from './styles'
import { Rate } from '../'
import ShowCardPlaceholder from './showCardPlaceholder.png'

const ShowCard = ({ image, style, name, rating, onClick }) => {
  return (
    <animated.div style={{ ...style }}>
      <Card image={image || ShowCardPlaceholder}>
        <CardActionArea onClick={onClick}>

          <CardContent>
            <Box width='100%' display='flex' justifyContent='space-between' alignItems='center'>

              <Typography gutterBottom variant='h3'>
                {name}
              </Typography>

              <Hidden smDown>
                {rating.average && <Rate value={rating.average} />}
              </Hidden>

            </Box>
          </CardContent>

        </CardActionArea>
      </Card>
    </animated.div>
  )
}

ShowCard.prototype = {
  image: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  rating: PropTypes.string,
  onClick: PropTypes.func
}

ShowCard.defaultProps = {
  style: {},
  name: 'Not informed',
  onClick: () => {}
}

export default ShowCard

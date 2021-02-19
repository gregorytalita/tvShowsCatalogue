import styled from 'styled-components'
import { Box } from '@material-ui/core'

export const RatingWrapper = styled(Box)`
  color: ${({ theme, rating }) => {
    if (rating >= 8) {
      return theme.palette.success.main
    }

    if (rating >= 6) {
      return theme.palette.warning.main
    }

    if (rating <= 6) {
      return theme.palette.error.main
    }
  }};
`

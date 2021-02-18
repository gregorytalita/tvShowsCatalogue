import styled from 'styled-components'
import {
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  CardContent as MuiCardContent,
  Box
} from '@material-ui/core';

export const Card = styled(MuiCard) `{
  width: 300px;
  height: 200px;
  background: transparent;
  margin-right: ${({ theme }) => `${theme.spacing(4)}px`};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 200px;
    height: 150px;
    margin-right: ${({ theme }) => `${theme.spacing(2)}px`};
  }
}`

export const CardMedia = styled(MuiCardMedia) `{
  width: 300px;
  height: 200px;
  position: absolute;
  z-index: -1;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 200px;
    height: 150px;
  }
}`

export const CardContent = styled(MuiCardContent) `{
  width: 268px;
  height: 169px;
  position: relative;
  color: ${({ theme }) => theme.palette.common.white};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 167px;
    height: 121px;
  }
}`

export const CardOverlay = styled.div`
  width: 300px;
  height: 200px;
  background: ${({ theme }) => theme.palette.grey[900]};
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

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
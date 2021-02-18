import styled from 'styled-components'
import {
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  CardContent as MuiCardContent
} from '@material-ui/core';

export const Card = styled(MuiCard) `{
  width: 300px;
  height: 200px;
  background: transparent;
  margin-right: ${({ theme }) => `${theme.spacing(4)}px`};
}`

export const CardMedia = styled(MuiCardMedia) `{
  width: 300px;
  height: 200px;
  position: absolute;
  z-index: -1;
}`

export const CardContent = styled(MuiCardContent) `{
  width: 300px;
  height: 200px;
  background: ${({ theme }) => theme.palette.grey[900]};
  opacity: 0.5
}`

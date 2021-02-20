import styled from 'styled-components'
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActionArea as MuiCardActionArea
} from '@material-ui/core'

export const Card = styled(MuiCard)`{
  width: 320px;
  height: 200px;
  background: url(${({ image }) => image});
  background-size: cover;
  margin-right: ${({ theme }) => `${theme.spacing(1)}px`};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 240px;
    height: 150px;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    width: 160px;
    height: 100px;
  }

}`

export const CardActionArea = styled(MuiCardActionArea)`
  height: 100%;
`

export const CardContent = styled(MuiCardContent)`{
  width: calc(100% - ${({ theme }) => `${theme.spacing(4)}px`});
  height: calc(100% - ${({ theme }) => `${theme.spacing(4)}px`});
  background: ${({ theme }) => theme.palette.grey[900]}a8;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}`

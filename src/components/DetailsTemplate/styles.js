import styled from 'styled-components'
import { Box } from '@material-ui/core'

export const ContentWrapper = styled(Box)`{
  display: flex;
  justify-content: space-between;

  background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.palette.common.white} 50%),
    url(${({ backgroundImage }) => backgroundImage });
  background-size: cover;
  background-position: center;
  padding-top: 60%;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-left: ${({ theme, paddingX }) => `${theme.spacing(paddingX) / 1.5}px`};
    padding-right: ${({ theme, paddingX }) => `${theme.spacing(paddingX) / 1.5}px`};
    width: 75vw;
    flex-direction: column;
    justify-content: flex-start;
  }
}`

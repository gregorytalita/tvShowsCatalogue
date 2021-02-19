import styled from 'styled-components'
import { Box } from '@material-ui/core'

export const ContentWrapper = styled(Box)`{

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: ${({ theme, paddingY, paddingX }) => (
      `${theme.spacing(paddingY) / 4}px ${theme.spacing(paddingX) / 4}px`
    )};
    width: 75vw;
  }
}`

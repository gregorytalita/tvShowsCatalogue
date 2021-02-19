import styled from 'styled-components'
import { Box } from '@material-ui/core'

export const ContentWrapper = styled(Box)`{
  display: flex;
  justify-content: space-between;
  width: 50%;
  max-width: 300px

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
  }
}`

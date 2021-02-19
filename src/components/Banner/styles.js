import styled from 'styled-components'

export const StyledBanner = styled.div`{
  width: 100%;
  height: 50%;
  background: url(${({ url }) => url});
  background-size: cover;
  background-position: bottom center;
  border-radius: 16px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 25%;
  }
}`

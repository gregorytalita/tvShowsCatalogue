import styled from 'styled-components'

export const StyledBanner = styled.div`{
  width: 100%;
  height: 50%;
  background: ${({ url }) => url ? `url(${url})` : 'linear-gradient(to right, #8e9eab, #eef2f3)'};
  background-size: cover;
  background-position: bottom center;
  border-radius: 16px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 25%;
  }
}`

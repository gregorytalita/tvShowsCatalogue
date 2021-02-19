import styled from 'styled-components'

export const StyledBanner = styled.div`{
  max-width: 245px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  background: url(${({ url }) => url });
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  margin: ${({ theme }) => theme.spacing(2)}px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 100%;
    margin: 0;
  }
}`

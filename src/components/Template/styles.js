import styled from 'styled-components'

export const ContentWrapper = styled.main`
  width: 100%;
  max-width: calc(100vw - ${({ theme }) => `${theme.spacing(6)}px`});
  min-height: 100vh;
  padding: ${({ theme }) => `${theme.spacing(10)}px ${theme.spacing(3)}px`};
  flex: 1 1 100%;
  position: relative;
`

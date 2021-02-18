import styled from 'styled-components'

export const TemplateWrapper = styled.div`
  display: flex;
`

export const Content = styled.main`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => `${theme.spacing(8)}px ${theme.spacing(3)}px`};
  flex: 1 1 100%;
  position: relative;
`
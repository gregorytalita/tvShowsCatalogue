import styled from 'styled-components'

export const MoviesContainer = styled.div `{
  display: flex;
  overflow-x: scroll;
  width: calc(100% - ${({ theme }) => `${theme.spacing(2)}px`});
  padding: ${({ theme }) => `${theme.spacing(2)}px 0`};
}`
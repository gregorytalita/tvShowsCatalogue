import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
  0% {
    opacity: 1;
    display: initial;
  }
  90% {
    opacity: 0;
  }
  100% {
    display: none;
  }
`

export const LoaderOverlayWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  animation: 1s ${({ enabled }) => enabled ? '' : fadeOut} ease-out both;
  z-index: 1600;
  display: none;
  opacity: 0;
`

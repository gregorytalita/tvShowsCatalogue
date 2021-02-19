import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
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
  animation: 1s ${({ isLoading }) => isLoading ? '' : fadeOut} ease-out both;
  z-index: 1600;
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
`

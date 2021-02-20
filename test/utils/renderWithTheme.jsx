import React from 'react'
import { render } from '@testing-library/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/styles'
import { ThemeProvider } from 'styled-components'
import theme from '../../src/core/theme'

export const renderWithTheme = (node) => render(
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {node}
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)

export default renderWithTheme

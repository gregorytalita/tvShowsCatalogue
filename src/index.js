import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/styles'
import { ThemeProvider } from 'styled-components'
import theme from './core/theme'
import App from './containers/App'
import './index.css'

ReactDOM.render(
  <StylesProvider injectFirst>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Route component={App} />
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </StylesProvider>,
  document.getElementById('root'))

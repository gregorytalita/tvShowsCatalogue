import React from 'react'
import { Route } from 'react-router-dom'

const PageRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={Component} />
  )
}

export default PageRoute

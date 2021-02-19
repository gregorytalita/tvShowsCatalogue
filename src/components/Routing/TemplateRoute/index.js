import React from 'react'
import { Route } from 'react-router-dom'
import Template from '../../Template'

const TemplateRoute = ({ component: Component, onKeyUpSearch, redirectRoute, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ history, ...props }) => (
        <Template
          history={history}
          onKeyUpSearch={onKeyUpSearch}
          redirectRoute={redirectRoute}
        >
          <Component {...props} history={history} />
        </Template>
      )}
    />
  )
}

export default TemplateRoute

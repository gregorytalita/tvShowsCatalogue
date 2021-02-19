import React from 'react'
import { Route } from 'react-router-dom'
import Template from '../../Template'

const TemplateRoute = ({ component: Component, onClickSearch, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ history, ...props }) => (
        <Template
          history={history}
          onClickSearch={onClickSearch}
        >
          <Component {...props} history={history} />
        </Template>
      )}
    />
  )
}

export default TemplateRoute

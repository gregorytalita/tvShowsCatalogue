import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Template from '../Template'

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

TemplateRoute.prototype = {
  component: PropTypes.element.isRequired,
  onKeyUpSearch: PropTypes.func.isRequired,
  redirectRoute: PropTypes.string
}

TemplateRoute.defaultProps = {
  onKeyUpSearch: () => {}
}

export default TemplateRoute

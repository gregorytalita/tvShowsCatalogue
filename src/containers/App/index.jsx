import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { TemplateRoute } from '../../components'
import * as routes from '../../core/constants/routes'

import Dashboard from '../Dashboard'

const App = () => {

  return (

    <Switch>
      <TemplateRoute path={routes.NOT_PRIVATE.DASHBOARD} component={Dashboard} />
      <Redirect from='*' to={routes.NOT_PRIVATE.DASHBOARD} />
    </Switch>

  )
}

export default App

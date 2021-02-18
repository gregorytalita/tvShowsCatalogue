import React from 'react'
import { Route } from 'react-router-dom'
import Template from '../../Template'

const TemplateRoute = ({ component: Component, contentMenu: ContentMenuComponent, sideMenuItems, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ history, ...props }) => (
        <Template history={history} sideMenuItems={sideMenuItems} contentMenu={ContentMenuComponent && (() => <ContentMenuComponent {...props} history={history} />)}>
          <Component {...props} history={history} />
        </Template>
      )}
    />
  )
}

export default TemplateRoute

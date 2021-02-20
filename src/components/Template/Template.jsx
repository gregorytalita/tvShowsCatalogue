import React from 'react'
import PropTypes from 'prop-types'

import { ContentWrapper } from './styles'
import AppBar from '../AppBar'

const Template = ({ children, onKeyUpSearch, history, redirectRoute }) => {
  return (
    <>
      <AppBar history={history} onKeyUpSearch={onKeyUpSearch} redirectRoute={redirectRoute} />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </>
  )
}

Template.prototype = {
  children: PropTypes.element.isRequired,
  onKeyUpSearch: PropTypes.func.isRequired,
  redirectRoute: PropTypes.string
}

Template.defaultProps = {
  redirectRoute: '/'
}

export default Template

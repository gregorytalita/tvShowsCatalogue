import React from 'react'
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

export default Template

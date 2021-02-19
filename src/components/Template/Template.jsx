import React from 'react'
import { ContentWrapper } from './styles'
import AppBar from '../AppBar'

const Template = ({ children, onClickSearch, history }) => {
  return (
    <>
      <AppBar history={history} onClickSearch={onClickSearch} />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </>
  )
}

export default Template

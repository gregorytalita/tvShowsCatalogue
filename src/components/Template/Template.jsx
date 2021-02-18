import React, { useMemo } from 'react'

import {
  Content,
  TemplateWrapper
} from './styles'

import AppBar from '../AppBar'

const Template = ({ children, contentMenu: ContentMenu, sidebarMenuItems, history }) => {

  const withContentMenu = useMemo(() => !!ContentMenu, [ContentMenu])

  return (
    <TemplateWrapper>
      <AppBar history={history} />
      <Content withMenu={withContentMenu}>
        {children}
      </Content>
    </TemplateWrapper>
  )
}

export default Template
